namespace rtc {
    const I2C_ADDR = 0x68
    const REG_SEC = 0x00
    const REG_MIN = 0x01
    const REG_HOUR = 0x02
    const REG_CTRL = 0x0E

    function initialize() {
        let buf = pins.createBuffer(2)
        buf[0] = REG_CTRL
        buf[1] = 0x4C
        pins.i2cWriteBuffer(I2C_ADDR, buf)
    }

    initialize()

    function HexToDec(value: number): number {
        return Math.floor(value / 16) * 10 + (value % 16)
    }

    function leadingZeros(value: number): string {
        if (value < 10) {
            return "0" + value
        }
        return "" + value
    }

    function getRegister(register: number): number {
        let buf = pins.createBuffer(1)
        buf[0] = register
        pins.i2cWriteBuffer(I2C_ADDR, buf)
        return pins.i2cReadNumber(I2C_ADDR, NumberFormat.Int8LE)
    }

    export function getTime(): number[] {
        let hour = HexToDec(getRegister(REG_HOUR))
        let min = HexToDec(getRegister(REG_MIN))
        let sec = HexToDec(getRegister(REG_SEC))
        return [hour, min, sec]
    }

    export function getTimeString(): string {
        let time = getTime()
        let hour = leadingZeros(time[0])
        let min = leadingZeros(time[1])
        let sec = leadingZeros(time[2])
        return `${hour}:${min}:${sec}`
    }
}
