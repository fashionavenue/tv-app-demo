import React, { useEffect, useState } from 'react'
import instance from '../Utils/axios'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../Utils/Firebase';

function DisplayContent() {
    const db = getDatabase(app);

    const imageRegex = /^image\/(jpeg|jpg|png|gif|bmp|webp)$/;
    const videoRegex = /^video\/(mp4|webm|ogg|avi|mov)$/;
    const [data, setData] = useState()
    console.log({ data })

    const getContent = async () => {
        try {
            const starCountRef = ref(db, 'users');
            onValue(starCountRef, (snapshot) => {
                const data1 = snapshot.val();
                // updateStarCount(postElement, data);
                console.log(data1)
                setData(data1)
            });
            // const res = await instance.get("images.json")
            // console.log({ res })
            // const filter = res?.data[Object.keys(res?.data)[Object.keys(res?.data).length - 1]]
            // setData(filter)
        } catch (error) {
            console.log({ error })
        }
    }
    useEffect(() => {
        getContent()
    }, [])

    return (
        <div>
            {imageRegex.test(data?.type) && <img src={data?.url} width={500} height={500} />}
            {videoRegex.test(data?.type) && <video width="750" height="500" controls >
                <source src={data?.url} type={data?.type} />
            </video>}

        </div>
    )
}

export default DisplayContent