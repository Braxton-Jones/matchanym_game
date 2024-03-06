"use client"
import React from 'react'

export default function Timer() {
    let time = "2:00"
  return (
    <span className="bg-nymPurple1 py-2 px-3 rounded-sm text-sm">{`Time Remaining - ${time}`}</span>
  )
}
