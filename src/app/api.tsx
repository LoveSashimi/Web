export type CountriesResponse = {
    data: Array<{
      id: number
      attributes: {
        country: string
        government: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        locale: string
        description: string
      }
    }>
    meta: {
      pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }
  

class StrapiService {

    readonly baseURL;

    constructor(options: {
        baseURL: string
    }) {
        this.baseURL = options.baseURL;
    }

    async fetchCountries(filters?: {
      country?: string,
    }): Promise<CountriesResponse> {
        let url = `${this.baseURL}/api/countries`;
        if (filters?.country) {
          url = `${url}?filters[country][$eq]=${filters.country}`;
        }
        const res = await fetch(url, {
          next: {
            revalidate: 1,
          },
        });
        const data = await res.json() as CountriesResponse; 
        console.log(data);
        return data;
    }
}

export const strapiService = new StrapiService({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_URL || '',
});
