pxt-rtc-ds3231
==============

Real-time clock extension for the Micro:bit

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
