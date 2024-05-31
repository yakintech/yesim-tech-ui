import React from 'react'
import './style.css'
import './style.scss'
import style from './styles.module.css'
import { style2 } from './style'
import { useTranslation } from 'react-i18next'

function StyleSample() {

    let h1Style = { color: 'yellow', backgroundColor: 'black', fontSize: 50 }


    let { t } = useTranslation();

    return <>

        <div>
            <h2>{t("name")}: Çağatay</h2>
            <h2>{t("surname")}: Yıldız</h2>
            <h2>{t("age")}: 18</h2>
        </div>

        <hr />
        <h1 style={{ color: 'yellow', backgroundColor: 'black', fontSize: 50 }}>Hello</h1>

        <hr />

        <h1 style={h1Style}>Hello-2</h1>

        <hr />

        <h1 className='title'>Hello-3</h1>

        <hr />

        <h1 className={style.errorMessage}>Hello-4</h1>

        <hr />

        <h1 style={style2.title}>Hello-5</h1>

        <hr />

        <h1 className="title2">Hello-6</h1>

    </>
}

export default StyleSample
