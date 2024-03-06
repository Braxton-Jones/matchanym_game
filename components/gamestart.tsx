import React from 'react'
import Tutorial from './tutorial'
import { Button } from './ui/button'

export default function GameStart() {
  return (
    <div className="bg-transparent text-center p-1 flex gap-2">
            <Tutorial />
            <Button
              type="button"
              className="w-full h-full bg-transparent hover:bg-nymText hover:text-nymBackground border-2 border-nymText transition-all ease-in-out"
            >
              <p className="font-black text-lg font-montserrat p-1 ">
                Ready to Play?
              </p>
            </Button>
          </div>
  )
}
