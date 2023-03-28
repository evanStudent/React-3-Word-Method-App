import { useState, useEffect } from 'react'

function One () {
    const [first, setFirst] = useState('cool');
    const [second, setSecond] = useState('casual');
    const [third, setThird] = useState('trendy')

    useEffect(() => {
        console.log(`looking ${first}!`);
    }, [first]); 

    useEffect(() => {
        console.log(`and ${second}!`);
    }, [second]);

    useEffect(() => {
        console.log(`the three words you choose are ${first}, ${second}, and ${third}!`);
    }, [third])

    return (
        <div className="buttonclass">
            
            <h2>{first}, {second}, {third} </h2>
            <h5>First word: {first} </h5>
            <button onClick={() => setFirst('cool')}>cool</button>
            <button onClick={() => setFirst('casual')}>casual</button>
            <button onClick={() => setFirst('trendy')}>trendy</button>
            <button onClick={() => setFirst('excited')}>excited</button>
            <button onClick={() => setFirst('classic')}>classic</button>
            <button onClick={() => setFirst('glamourous')}>glamourous</button>
            <button onClick={() => setFirst('indie')}>indie</button>
            <button onClick={() => setFirst('fancy')}>fancy</button>
            <button onClick={() => setFirst('sexy')}>sexy</button>
            <button onClick={() => setFirst('bold')}>bold</button>
            <button onClick={() => setFirst('sporty')}>sporty</button>
            <button onClick={() => setFirst('loud')}>loud</button>
            <button onClick={() => setFirst('minimalist')}>minimalist</button>
            <button onClick={() => setFirst('maximalist')}>maximalist</button>
            <button onClick={() => setFirst('cartoonish')}>cartoonish</button>
            <button onClick={() => setFirst('edgy')}>edgy</button>
            <button onClick={() => setFirst('neutral')}>neutral</button>
            <button onClick={() => setFirst('muted')}>muted</button>
            <button onClick={() => setFirst('effortless')}>effortless</button>
            <button onClick={() => setFirst('preppy')}>preppy</button>
            <button onClick={() => setFirst('feminine')}>feminine</button>
            <button onClick={() => setFirst('masculine')}>masculine</button>
            <button onClick={() => setFirst('non-binary')}>non-binary</button>
            <button onClick={() => setFirst('colorful')}>colorful</button>
            <button onClick={() => setFirst('hillbilly')}>hillbilly</button>
            <button onClick={() => setFirst('rural-chic')}>rural-chic</button>
            <button onClick={() => setFirst('playful')}>playful</button>
            <button onClick={() => setFirst('mismatched')}>mismatched</button>
            <button onClick={() => setFirst('ornate')}>ornate</button>
            <button onClick={() => setFirst('90s')}>90s</button>

            <h5>Second word: {second} </h5>
            <button onClick={() => setSecond('cool')}>cool</button>
            <button onClick={() => setSecond('casual')}>casual</button>
            <button onClick={() => setSecond('trendy')}>trendy</button>
            <button onClick={() => setSecond('excited')}>excited</button>
            <button onClick={() => setSecond('classic')}>classic</button>
            <button onClick={() => setSecond('glamourous')}>glamourous</button>
            <button onClick={() => setSecond('indie')}>indie</button>
            <button onClick={() => setSecond('fancy')}>fancy</button>
            <button onClick={() => setSecond('sexy')}>sexy</button>
            <button onClick={() => setSecond('bold')}>bold</button>
            <button onClick={() => setSecond('sporty')}>sporty</button>
            <button onClick={() => setSecond('loud')}>loud</button>
            <button onClick={() => setSecond('minimalist')}>minimalist</button>
            <button onClick={() => setSecond('maximalist')}>maximalist</button>
            <button onClick={() => setSecond('cartoonish')}>cartoonish</button>
            <button onClick={() => setSecond('edgy')}>edgy</button>
            <button onClick={() => setSecond('neutral')}>neutral</button>
            <button onClick={() => setSecond('muted')}>muted</button>
            <button onClick={() => setSecond('effortless')}>effortless</button>
            <button onClick={() => setSecond('preppy')}>preppy</button>
            <button onClick={() => setSecond('feminine')}>feminine</button>
            <button onClick={() => setSecond('masculine')}>masculine</button>
            <button onClick={() => setSecond('non-binary')}>non-binary</button>
            <button onClick={() => setSecond('colorful')}>colorful</button>
            <button onClick={() => setSecond('hillbilly')}>hillbilly</button>
            <button onClick={() => setSecond('rural-chic')}>rural-chic</button>
            <button onClick={() => setSecond('playful')}>playful</button>
            <button onClick={() => setSecond('mismatched')}>mismatched</button>
            <button onClick={() => setSecond('ornate')}>ornate</button>
            <button onClick={() => setSecond('90s')}>90s</button>

            <h5>Third word: {third} </h5>
            <button onClick={() => setThird('cool')}>cool</button>
            <button onClick={() => setThird('casual')}>casual</button>
            <button onClick={() => setThird('trendy')}>trendy</button>
            <button onClick={() => setThird('excited')}>excited</button>
            <button onClick={() => setThird('classic')}>classic</button>
            <button onClick={() => setThird('glamourous')}>glamourous</button>
            <button onClick={() => setThird('indie')}>indie</button>
            <button onClick={() => setThird('fancy')}>fancy</button>
            <button onClick={() => setThird('sexy')}>sexy</button>
            <button onClick={() => setThird('bold')}>bold</button>
            <button onClick={() => setThird('sporty')}>sporty</button>
            <button onClick={() => setThird('loud')}>loud</button>
            <button onClick={() => setThird('minimalist')}>minimalist</button>
            <button onClick={() => setThird('maximalist')}>maximalist</button>
            <button onClick={() => setThird('cartoonish')}>cartoonish</button>
            <button onClick={() => setThird('edgy')}>edgy</button>
            <button onClick={() => setThird('neutral')}>neutral</button>
            <button onClick={() => setThird('muted')}>muted</button>
            <button onClick={() => setThird('effortless')}>effortless</button>
            <button onClick={() => setThird('preppy')}>preppy</button>
            <button onClick={() => setThird('feminine')}>feminine</button>
            <button onClick={() => setThird('masculine')}>masculine</button>
            <button onClick={() => setThird('non-binary')}>non-binary</button>
            <button onClick={() => setThird('colorful')}>colorful</button>
            <button onClick={() => setThird('hillbilly')}>hillbilly</button>
            <button onClick={() => setThird('rural-chic')}>rural-chic</button>
            <button onClick={() => setThird('playful')}>playful</button>
            <button onClick={() => setThird('mismatched')}>mismatched</button>
            <button onClick={() => setThird('ornate')}>ornate</button>
            <button onClick={() => setThird('90s')}>90s</button>
        </div>

    )
}

export default One