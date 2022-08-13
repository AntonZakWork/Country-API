export type Country = {
    name: {
        common: string,
        nativeName: Record<string, {official: string, common: string}>
    },
    borders: string[],
    flags : {
        png: string
    },
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    currencies: {
        name: string
    }[],
    tld: [domain: string],
    languages: Record<string, string>
}
export type Data = [Country]

export type FetchByCodeData = {'0': Country}