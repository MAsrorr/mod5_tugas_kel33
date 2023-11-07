import { Fragment } from "react";
import React from "react";
import "./Profile.css";  
import CardSmall from "../component/CardSmall";
import { anggota } from "../data/anggota";

export default function Profile() {
  return (
    <>
        <p className="profile-title centered-title">Anggota Kelompok</p>
        {anggota.map((member, index) => (
            <Fragment key={member.id}>
            <CardSmall
                title={member.name}
                genre={member.nim}
                img={member.img}
                r
            />
            {anggota.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </>
  );
}