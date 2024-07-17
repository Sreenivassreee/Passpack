import { useEffect, useState } from "react";
import { updateFirebaseDetails } from "../lib/firebase";
import { decription, encription } from "../lib/web3";

export const HomePage = () => {
    // const { text } = useContext(MyContext);
    const [planText, setPlainText] = useState<string | undefined>()
    const [password] = useState('Sree@123')
    const [etext, setEtext] = useState<string | undefined>()
    const user = location.pathname.split("/")[1]
    const pass = localStorage.getItem('pass') ?? ""
    const localEtext = localStorage.getItem('etext') ?? ''

    const openExtensionPopup = async () => {
        /*ts-ignore*/
        
    };
    if (!pass) {
        openExtensionPopup()
    }


    useEffect(() => {
        const res = decription({ etext: localEtext, password: pass })
        if (res != false) {
            setPlainText(res)
        } else {
            openExtensionPopup()
        }
        return (() => {
            localStorage.setItem("etext", "")
            localStorage.setItem("pass", '')
        })
    }, [])


    const onSave = async () => {
        const tempEtext = encription({ text: planText ?? '', password })

        const res = await updateFirebaseDetails({ user, etext: tempEtext ?? '' })
        setEtext(tempEtext)
        console.log("[etext]", etext)
        console.log("updateFirebaseDetails", res)
    }
    const onClose = () => {

    }
    console.log("planText", planText)

    return <>
        {planText && <p>{planText}</p>}
        <input type="text" value={planText} onChange={(e) => { setPlainText(e.target.value) }} />
        <button onClick={onSave}>Save</button>
        <button onClick={onClose}>Close</button>

    </>
}