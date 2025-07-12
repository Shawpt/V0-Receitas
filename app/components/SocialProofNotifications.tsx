"use client"

import { useState, useEffect } from "react"
import { CheckCircle, X } from "lucide-react"

const notifications = [
  { name: "Maria Silva", location: "São Paulo, SP", action: "acabou de adquirir" },
  { name: "João Santos", location: "Rio de Janeiro, RJ", action: "está visualizando" },
  { name: "Ana Costa", location: "Belo Horizonte, MG", action: "acabou de adquirir" },
  { name: "Pedro Oliveira", location: "Porto Alegre, RS", action: "está no checkout" },
  { name: "Carla Mendes", location: "Salvador, BA", action: "acabou de adquirir" },
]

export default function SocialProofNotifications() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true)
      setCurrentNotification(Math.floor(Math.random() * notifications.length))

      setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }

    const interval = setInterval(showNotification, 8000)

    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  const notification = notifications[currentNotification]

  return (
    <div className="fixed bottom-6 left-6 bg-white rounded-lg shadow-2xl p-4 max-w-sm z-40 animate-in slide-in-from-left duration-500">
      <div className="flex items-start gap-3">
        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />

        <div className="flex-1">
          <p className="text-sm text-gray-900">
            <span className="font-semibold">{notification.name}</span> de {notification.location}
          </p>
          <p className="text-xs text-gray-600 mt-1">{notification.action} o pacote completo</p>
          <p className="text-xs text-gray-400 mt-1">há 2 minutos</p>
        </div>

        <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
