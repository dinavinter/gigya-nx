import {TemplateResult} from "lit";

const getRenderString = (data: TemplateResult) => {
    const {strings, values} = data;
    const v: any[] = [...values, ''].map((e: TemplateResult | unknown) => e && typeof e === 'object' && 'values' in e ? getRenderString(e as TemplateResult) : e)
    return strings.reduce((acc, s, i) => acc + s + v[i], '')
}