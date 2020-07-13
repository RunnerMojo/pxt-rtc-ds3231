pxt-rtc-ds3231-date
===================

Real-time clock extension for the Micro:bit
added in date support

Example
-------

```
rtc.setTime("18:30:00")
```

```
basic.forever(function () {
    basic.showString(rtc.getTimeString())
})
```
