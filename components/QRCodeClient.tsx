'use client'

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

interface QRCodeClientProps {
  data: string
  size?: number
  showDownload?: boolean
}

export function QRCodeClient({ data, size = 300, showDownload = true }: QRCodeClientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [qrDataUrl, setQrDataUrl] = useState<string>('')

  useEffect(() => {
    if (!canvasRef.current) return
    
    setIsLoading(true)
    
    QRCode.toCanvas(canvasRef.current, data, {
      width: size,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      },
      errorCorrectionLevel: 'H'
    }, (error) => {
      if (!error && canvasRef.current) {
        setQrDataUrl(canvasRef.current.toDataURL())
      }
      setIsLoading(false)
    })
  }, [data, size])

  const downloadQR = () => {
    if (!qrDataUrl) return
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = qrDataUrl
    link.click()
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 rounded-xl">
            <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="rounded-xl shadow-lg bg-white"
        />
      </div>
      
      {showDownload && !isLoading && qrDataUrl && (
        <button
          onClick={downloadQR}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Скачать QR-код
        </button>
      )}
    </div>
  )
}
