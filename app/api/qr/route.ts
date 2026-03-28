import { NextRequest, NextResponse } from 'next/server'
import QRCode from 'qrcode'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const size = searchParams.get('size') || '300'
    const data = searchParams.get('data')
    
    if (!data) {
      return new NextResponse('Missing "data" parameter', { status: 400 })
    }
    
    // Парсим размер
    let width = 300
    if (size.includes('x')) {
      width = parseInt(size.split('x')[0])
    } else {
      width = parseInt(size)
    }
    
    // Генерируем QR-код
    const qrBuffer = await QRCode.toBuffer(data, {
      width: width,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      },
      errorCorrectionLevel: 'H'
    })
    
    // Возвращаем изображение PNG
    return new NextResponse(qrBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000',
        'Content-Disposition': 'inline'
      }
    })
    
  } catch (error) {
    console.error('QR generation error:', error)
    return new NextResponse('Failed to generate QR code', { status: 500 })
  }
}
