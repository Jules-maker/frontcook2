
const URL_BASE = 'http://localhost:2323/api/category'

export async function getAllCategories(link:string)
{
    const response = await fetch(`${URL_BASE}${link}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}


export async function apiAddCategory(data = {}){
    const res = await fetch(`${URL_BASE}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await res.json();
}

export async function getOneCategory(id: string) {
    const response = await fetch(`${URL_BASE}/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}


export async function apiEditCategory(id: string, data: JSON) {
    const res = await fetch(`${URL_BASE}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

export async function apiDeleteCategory(id: string) {
    const res = await fetch(`${URL_BASE}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();

}