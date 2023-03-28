import {useEffect, useState} from 'react'

function JSONData() {
    const [Models, fetchModels] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/models')
        .then((res) => res.json())
        .then((res) => {
            fetchModels(res)
            console.log(res);  
        })
    }, []);

    return(
        <div className="explore">
            <h2>Other Examples</h2>
            <h4>(provided by Allison Bornstein)</h4>
            
            <table className="table">
                <thead>
                    <tr>
                        {/* <th scope="col">ID</th> */}
                        {/* <th scope="col">Picture</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">First Word  </th>
                        <th scope="col">Second Word  </th>
                        <th scope="col">Third Word  </th>
                    </tr>
                </thead>
                <tbody>
                    {Models.map((item, i) => {
                                        return <tr>
                                            {/* <td>{item.id}</td> */}
                                            {/* <td> <img src="{item.picture}"/> </td> */}
                                            <td>{item.name}</td>
                                            <td>{item.firstword}</td>
                                            <td>{item.secondword}</td>
                                            <td>{item.thirdword}</td>
                                        </tr>
                    })}
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default JSONData