function buildServerUrl(host, portValue, useHttps){
    if(!host || host === ""){
        return "host가 필요합니다."
    }

    const pv = Number(portValue);

    if(!Number.isFinite(pv)){
        return "port는 숫자여야 합니다."
    }   
    
    if(!Number.isInteger(pv)){
        return "port는 정수여야 합니다."
    }

    if(pv < 1 || pv > 65535){
        return "port 범위가 올바르지 않습니다."
    }

    const htt = useHttps ? "https" : "http";

    return `${htt}://${host}:${pv}`;
}