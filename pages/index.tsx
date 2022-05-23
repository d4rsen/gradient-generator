import type {NextPage} from 'next'
import {useEffect, useState} from 'react';
import {getRandomDirection, randomColorGenerator} from '../utils/utils';

const Home: NextPage = () => {
    const [color, setColor] = useState<string>('')
    const [color2, setColor2] = useState<string>('')
    const [direction, setDirection] = useState<string>('')
    const [text, setText] = useState<string>('Copy to clipboard')

    useEffect((): void => {
        setColor(randomColorGenerator())
        setColor2(randomColorGenerator())
        setDirection(getRandomDirection())
    }, [])

    const colorHandler = (): void => {
        setColor(randomColorGenerator())
        setColor2(randomColorGenerator())
        setDirection(getRandomDirection())
    }

    const copyHandler = async () => {
        await navigator.clipboard
            .writeText(`background: linear-gradient(${direction}, ${color}, ${color2});`)
        setText('Copied!')
        setTimeout(() => setText('Copy to clipboard'), 1000)
    }

    return (
        <div className="wrapper">
            <div
                className="background"
                style={{background: `linear-gradient(${direction}, ${color}, ${color2})`}}
            />
            <button
                onClick={colorHandler}
                className="button"
            >
                <span className="button__text-container">
                    <span className="button__text">
                        Change colors
                    </span>
                </span>
            </button>
            <button onClick={copyHandler} className="button">
                <span className="button__text-container">
                    <span className="button__text">
                        {text}
                    </span>
                </span>
            </button>
            <span className="colors">
                background: linear-gradient({direction}, {color}, {color2})
            </span>
        </div>
    )
}

export default Home

