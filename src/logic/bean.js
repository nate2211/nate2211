import React from "react";

const searchGene = (gene, n) => {
    let match = [];
    let end = Object.keys(gene).length;
    for(let i = n; i < end; i++){
        if(gene[i] === " " || gene[i] ==='/' & gene[i]==='n'){
            break;
        }
        match.push(gene[i])
    }
    return match

}


const beanFormat = (bean) => {
    const gene = {}
    for(let i = 0; i < bean.length; i++){
        let inspect = bean[i]
        gene[i] = inspect
    }
    let x = 0
    let n = bean.indexOf('https://')
    let link = searchGene(gene, n)
    bean = bean.replace(link.join(''), "LINK" + link.join('') + "LINK")
    return bean



}
const ContentFormat = ({content}) => {

    const recurReturn = (content, links) => {
        let max = content.length
        let start = content.indexOf('LINK') + 4
        console.log('First' + content.charAt(start))
        let gene = content.slice(start, max)
        console.log("gene" + gene)
        let end = gene.indexOf('LINK') - 1
        console.log('end' + content.charAt(end))
        let link = content.slice(start, end)
        links.push(link)
        console.log(link)
        if(gene.slice(end + 5, max).includes('LINK')){
            recurReturn(content.slice(end + 5, max), links)
        }
        return links
    }
    if(content.includes('LINK')) {
        let links = []
        links = recurReturn(content, links)
        return (links.map((link, i) => <a key={i} href={link}>{link}</a>))

    }
    return(<span>{content}</span>)

}
