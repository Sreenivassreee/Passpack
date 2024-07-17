import { useContext, useState } from "react";
import { MyContext } from "../lib/context/MyContext";
import { updateFirebaseDetails } from "../lib/firebase";
import { encription } from "../lib/web3";

export const HomePage = () => {
    const { text } = useContext(MyContext);
    const [planText, setPlainText] = useState<string | undefined>(text)
    const [etext, setEtext] = useState<string | undefined>()
    const user = location.pathname.split("/")[1]
    const onSave = async () => {
        setPlainText("SRENNIVDAS")
        const etext = encription({ text: planText ?? '' })
        const res = await updateFirebaseDetails({ user, etext: etext ?? '' })
        console.log("updateFirebaseDetails", res)
    }
    const onClose = () => {

    }
    console.log("planText", planText)

    console.log(text, "---temp")
    return <>
        <p>{planText}</p>
        <button onClick={onSave}>Save</button>
        <button onClick={onClose}>Close</button>

    </>
}