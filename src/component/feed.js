import { React, useState, useEffect } from 'react'

export default function Feed() {
    const [change, setchange] = useState({ no: "", sort: "" })
    const [API, setAPI] = useState([])

    useEffect(() => {
        APICALL(change.no);
        console.log("run")
    }, [change.no])
    async function APICALL(c) {
        switch (c) {
            case 2: await fetch("http://www.mocky.io/v2/59ac293b100000d60bf9c239")
                .then(res => res.json())
                .then(data => localStorage.setItem("api2", JSON.stringify(data.posts)) & setAPI(JSON.parse(localStorage.getItem("api2"))))
                .catch(() => setAPI(JSON.parse(localStorage.getItem("api2"))))
                break;
            case 1: await fetch("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236")
                .then(res => res.json())
                .then(data => localStorage.setItem("api1", JSON.stringify(data.posts)) & setAPI(JSON.parse(localStorage.getItem("api1"))))
                .catch(() => setAPI(JSON.parse(localStorage.getItem("api1"))))
                break;
            default: await fetch("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e")
                .then(res => res.json())
                .then(data => localStorage.setItem("api", JSON.stringify(data.posts)) & setAPI(JSON.parse(localStorage.getItem("api"))))
                .catch(() => setAPI(JSON.parse(localStorage.getItem("api"))))

        }


    }

    return (
        <>

            <header><span>FILTERS :</span>
                <div onClick={() => setAPI(API.sort((a, b) => { return b.shares - a.shares })) & setchange({ ...change, sort: "shares" })}>shares</div>
                <div onClick={() => setAPI(API.sort((a, b) => { return b.likes - a.likes })) & setchange({ ...change, sort: "likes" })}>likes</div>
                <div onClick={() => setAPI(API.sort((a, b) => { return b.views - a.views })) & setchange({ ...change, sort: "views" })}>views</div>
            </header>
            <section>
                {console.log('no', change.no, "sort", change.sort)}
                <article>
                    {API.map(item => <div className="card" key={Math.random()*10}>
                        <img src={item.thumbnail_image} alt="" />
                        <div className="details">

                            <div><span>{item.likes}</span>Likes</div>
                            <div><span>{item.shares}</span>Shares</div>
                            <div>{item.views}views </div>
                        </div>

                    </div>)}
                </article><div > Pages
                    <span className="page" onClick={() => setchange({ ...change, no: 0 })}>1</span>
                    <span className="page" onClick={() => setchange({ ...change, no: 1 })}>2</span>
                    <span className="page" onClick={() => setchange({ ...change, no: 2 })}>3</span>
                </div>


            </section>


        </>
    )
}
