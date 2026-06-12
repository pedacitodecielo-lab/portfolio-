import { NextResponse } from 'next/server'

const NOW_PLAYING_ENDPOINT   = 'https://api.spotify.com/v1/me/player/currently-playing'
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'
const TOKEN_ENDPOINT          = 'https://accounts.spotify.com/api/token'

async function getAccessToken() {
  const id      = process.env.SPOTIFY_CLIENT_ID
  const secret  = process.env.SPOTIFY_CLIENT_SECRET
  const refresh = process.env.SPOTIFY_REFRESH_TOKEN

  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refresh! }),
  })
  return res.json()
}

export async function GET() {
  const id      = process.env.SPOTIFY_CLIENT_ID
  const secret  = process.env.SPOTIFY_CLIENT_SECRET
  const refresh = process.env.SPOTIFY_REFRESH_TOKEN

  if (!id || !secret || !refresh) {
    return NextResponse.json({ configured: false }, { status: 200 })
  }

  try {
    const { access_token } = await getAccessToken()

    const nowRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 0 },
    })

    if (nowRes.status === 204 || nowRes.status > 400) {
      const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      const recent = await recentRes.json()
      const track  = recent.items?.[0]?.track
      return NextResponse.json({
        configured: true,
        isPlaying: false,
        title:         track?.name,
        artist:        track?.artists?.map((a: { name: string }) => a.name).join(', '),
        albumImageUrl: track?.album?.images?.[0]?.url,
        songUrl:       track?.external_urls?.spotify,
      })
    }

    const song = await nowRes.json()
    return NextResponse.json({
      configured: true,
      isPlaying:     song.is_playing,
      title:         song.item?.name,
      artist:        song.item?.artists?.map((a: { name: string }) => a.name).join(', '),
      albumImageUrl: song.item?.album?.images?.[0]?.url,
      songUrl:       song.item?.external_urls?.spotify,
    })
  } catch {
    return NextResponse.json({ configured: false }, { status: 200 })
  }
}
