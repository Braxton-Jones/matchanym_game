'use client'
import React from 'react'
import { useGameStore } from '@/lib/store-provider'

export default function Timer(player: {name: string}) {
  const isGameInProgress = useGameStore((state) => state.isGameInProgress);
  const time = useGameStore((state) => state.timer);
  return (
    <h1 className="font-black text-md">
          {isGameInProgress ? <span className="bg-nymPurple1 py-2 px-3 rounded-sm text-sm">{`Time Remaining - ${time}`}</span> : `Welcome Back, ${player.name}`}{" "}
    </h1>
  )
}
