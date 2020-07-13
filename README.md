pxt-rtc-ds3231-date
===================

Real-time clock extension for the Micro:bit
added in date support for gbraad's RTC support.
This library can be used with typical I2C DS3231SN modules found online. 

Example
-------

```
rtc.setTime("18:30:00")
rtc.getTime()
```

```
rtc.setDate("20:07:04")
rtc.getDate()
```

```
basic.forever(function () {
    basic.showString(rtc.getTimeString())
})
```
