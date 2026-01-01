function customrender(reactElement, container){
   /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)


    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props ){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   };
    container.appendChild(domElement)
}






const ReactElement = {
    type : 'a',
    props:{
        href: 'https://www.google.com',
        target:"_blank",
    },
    children: 'Go to Google'
}


const MainContainer = document.querySelector('#root')


customrender(ReactElement, MainContainer)