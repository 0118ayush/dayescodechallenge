const baseURL = "https://front-end-test-bvhzjr6b6a-uc.a.run.app/"

export function getProducts() {
    return fetch(baseURL)
        .then(resp => resp.json())
}

export default { getProducts }