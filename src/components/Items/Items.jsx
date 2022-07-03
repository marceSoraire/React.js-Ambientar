export const items = [
    {
        id:1,
        img:'https://gizmobo.com/wp-content/uploads/2021/11/samsung-galaxy-a22-5g-extra-2.webp',
        precio:'30000',
        categoria:'Celular',
        stock:10,
        fabricado:'japon',
        modelo:'Samsung A22'
    },
    {
        id:2,
        img:'https://m.media-amazon.com/images/I/71Fm5seJVPL._AC_SY355_.jpg',
        precio:'120000',
        categoria:'Gabinete',
        stock:7,
        fabricado:'Argentina',
        modelo:'Combo "Gabinete + Monitor y Accesorios'
    },
    {
        id:3,
        img:'https://arsonyb2c.vtexassets.com/arquivos/ids/348010/PS5_Dig_DS_B.jpg?v=637363629365300000',
        precio:'210000',
        categoria:'Consola',
        stock:4,
        fabricado:'japon',
        modelo:'PlayStation 5'
    },
    {
        id:4,
        img:'https://assets.spartangeek.com/cc/_AUTOxAUTO_crop_center-center_none/37250/MSI-Gungnir-110R-1.webp',
        precio:'40000',
        categoria:'Gabinete',
        stock:6,
        fabricado:'Argentina',
        modelo:'Thanos 70i X'
    },
    {
        id:5,
        img:'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/SG_A03_128_GB_Negro_R30_min_90cb55d161.png',
        precio:'40000',
        categoria:'Celular',
        stock:8,
        fabricado:'Argentina',
        modelo:'Samsung A033'
    },
    {
        id:6,
        img:'https://asgardstores.com/725-large_default/play-station-4-slim.jpg',
        precio:'170000',
        categoria:'Consola',
        stock:5,
        fabricado:'Japon',
        modelo:'PlayStation 4'
    },
    {
        id:7,
        img:'https://www.radioshack.com.mx/medias/100001289.jpg-515ftw?context=bWFzdGVyfHJvb3R8OTE2OTd8aW1hZ2UvanBlZ3xoYjIvaDIyLzkwNTc3ODYxMzQ1NTgvMTAwMDAxMjg5LmpwZ181MTVmdHd8YWQ2MzQ4ZTIxNzU3MDhhZjUzNDc2ODFmOGEyNzY2NGM4NmNmY2EwYTE1OTJkYzc0MWY5MzBkODUwYTJkOGExOA',
        precio:'140000',
        categoria:'Consola',
        stock:6,
        fabricado:'Argentina',
        modelo:'Xbox serie X'
    },
    {
        id:8,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67XfpukCXXQKdJAG-fXVLJdma3-XkeLrwqmvgQrH95wG_Tv92AJjPe9tWF6mC9ElekT4&usqp=CAU',
        precio:'35000',
        categoria:'Celular',
        stock:7,
        fabricado:'Argentina',
        modelo:'Nokia 7.2'
    },
    {
        id:9,
        img:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/gabinete-gamer-raidmax-vortex-v4-404wbu-0.jpg',
        precio:'35000',
        categoria:'Gabinete',
        stock:8,
        fabricado:'Argentina',
        modelo:'Radmax Vortex v4 404WB'
    }
]

export const getProductos =() => items;

export const getProductosFiltrado =(category) => {
    return items.filter(e => e.categoria === category)
}