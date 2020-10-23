<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <p class="font-weight-medium">แบบฟอร์มสมัครงาน</p>
    <v-container>
      <p class="font">ประวัติส่วนตัว</p>
      <v-row>
        <v-col class="s" cols="6" md="6">
          <v-text-field
            v-model="Firstname"
            :rules="fn"
            color="#4E342E"
            label="ชื่อ"
            required
          />
        </v-col>
        <v-col class="s" cols="6" md="6">
          <v-text-field
            v-model="Lastname"
            :rules="ln"
            color="#4E342E"
            label="นามสกุล"
            required
          />
        </v-col>
        <v-col class="s" cols="12" md="12">
          <v-text-field v-model="position" color="#4E342E" label="ตำแหน่ง" />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field v-model="loc" color="#4E342E" label="ที่อยู่ปัจจุบัน" />
        </v-col>
        <v-col class="s" cols="3">
          <v-text-field v-model="m" color="#4E342E" label="หมู่ที่/ซอย" />
        </v-col>
        <v-col class="s" cols="3">
          <v-text-field v-model="s" color="#4E342E" label="ถนน" />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field v-model="to" color="#4E342E" label="ตำบล/แขนง" />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field v-model="o" color="#4E342E" label="อำเภอ/เขต" />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field v-model="ch" color="#4E342E" label="จังหวัด" />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field
            v-model="call"
            :rules="callRules"
            color="#4E342E"
            :counter="10"
            label="เบอร์โทร"
            required
          />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field
            v-model="mail"
            :rules="emailRules"
            color="#4E342E"
            label="E-mail"
            required
          />
        </v-col>
        <v-radio-group v-model="row" class="s" row>
          <h2>ระดับการศึกษา</h2>
          <hr />
          <hr />
          <v-radio
            label="ม.ต้น/ม.ปลาย"
            color="#BA68C8"
            value="ม.ตอนต้น/ม.ปลาย"
          ></v-radio>
          <v-radio label="ปวช/ปวส" color="#BA68C8" value="ปวช/ปวส"></v-radio>
          <v-radio
            label="ปริญญาตรี"
            color="#BA68C8"
            value="ปริญญาตรี"
          ></v-radio>
          <v-radio
            label="สูงปริญญาตรี"
            color="#BA68C8"
            value="สูงปริญญาตรี"
          ></v-radio>
        </v-radio-group>
      </v-row>
    </v-container>

    <v-btn color="#BA68C8" class="mr-4" @click="addData"> submit </v-btn>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      Firstname: '',
      Lastname: '',
      position: '',
      loc: '',
      m: '',
      s: '',
      to: '',
      o: '',
      ch: '',
      call: '',
      mail: '',
      row: '',
    }
  },
  methods: {
    addData() {
      const dataText = {
        Firstname: this.Firstname,
        Lastname: this.Lastname,
        position: this.position,
        loc: this.loc,
        m: this.m,
        s: this.s,
        to: this.to,
        o: this.o,
        ch: this.ch,
        call: this.call,
        mail: this.mail,
        row: this.row,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('ADDDATA')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
        .then(function () {
          alert('เพิ่มข้อมูลสำเร็จ')
        })
    },
    reset() {},
  },
}
</script>
<style>
@import url(https://fonts.googleapis.com/css2?family=Athiti&family=Rajdhani&display=swap);
.theme--dark.v-application {
  background-image: url(https://ae01.alicdn.com/kf/Hf7fd594c1c054943b9f27fa34b656d56V/10x10FT.jpg);
  background-size: cover;
}
.font-weight-medium {
  font-family: 'Athiti', sans-serif;
  color: #ea80fc;
  font-size: 50px;
}
.font {
  font-family: 'Athiti', sans-serif;
  color: #ea80fc;
  font-size: 30px;
}
.s {
  font-family: 'Athiti', sans-serif;
}
.mr-4 {
  font-family: 'Rajdhani', sans-serif;
}
</style>
