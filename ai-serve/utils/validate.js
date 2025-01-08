class Validate {
    async undefinedCheck(val, par) {
        if (val === undefined) {
            throw { msg: `${par}字段缺失，它是必填的`, code: 400,validate:null }
        }
    }
    async nullCheck(val, tips, par) {
        await this.undefinedCheck(val, par)
        if (val.trim() === "") {
            throw { msg: tips, code: 422 }
        }
        if (typeof val !== "string") {
            throw { msg: `${par}字段必须是字符串类型`, code: 400,validate:null }
        }

    }

    async isArraryCheck(val, tips, par){
        await this.undefinedCheck(val, par)
        if(!Array.isArray(val)){
            throw { msg: `${par}字段必须是数组类型`, code: 400,validate:null }
        }
        if(val.length<=0){
            throw { msg: `${tips}`, code: 422,validate:null }
        }

    }
}

export default new Validate()