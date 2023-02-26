import React, { Image } from 'react'
import './App.css'
import ResultCard from './components/result-card/ResultCard'
import Card from './components/card/Card'
import IndexRow from './components/index-row/IndexRow'
import Button from './components/button/Button'
import Reaction from './assets/images/icon-reaction.svg'
import Memory from './assets/images/icon-memory.svg'
import Verbal from './assets/images/icon-verbal.svg'
import Visual from './assets/images/icon-visual.svg'

function App() {
    const data = [
        {
            category: 'Reaction',
            score: 80,
            icon: Reaction,
            color: '#FF5555',
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555`,
        },
        {
            category: 'Memory',
            score: 92,
            icon: Memory,
            color: '#FFB21E',
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E`,
        },
        {
            category: 'Verbal',
            score: 61,
            icon: Verbal,
            color: '#00BB8F',
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F`,
        },
        {
            category: 'Visual',
            score: 72,
            icon: Visual,
            color: '#1125D6',
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6`,
        },
    ]

    return (
        <div className="App">
            <Card>
                <ResultCard />
                <div className="summary-container">
                    <p className="summary-label">Summary</p>
                    <div className="summary-content">
                        {data.map((item) => {
                            return (
                                <IndexRow
                                    key={item.category}
                                    icon={item.icon}
                                    category={item.category}
                                    score={item.score}
                                    color={item?.color}
                                    background={item?.background}
                                />
                            )
                        })}
                    </div>
                    <Button></Button>
                </div>
            </Card>
        </div>
    )
}

export default App
