function messageTemplate(data:any, event:string, id:string | undefined) {
    const msg = {
        data: data,
        event: event,
        id: id
    }
    return JSON.stringify(msg)
}

export default messageTemplate