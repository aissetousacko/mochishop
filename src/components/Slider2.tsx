// 'use client'
// import { Component } from 'react'
// import Flicking, { ViewportSlot } from '@egjs/react-flicking'
// import { Arrow } from '@egjs/flicking-plugins'
// import '@egjs/flicking-plugins/dist/arrow.css'
// import { simplifiedProduct } from '@/app/interface'
// import Link from 'next/link'
// import Image from 'next/image'
// import Product from './Product'

// interface Props {
//   items: simplifiedProduct[]
// }

// export default class Slider2 extends Component<Props> {
//   private flickingRef = createRef<Flicking>()
//   private _plugins = [new Arrow()]

//   public render() {
//     const { items } = this.props

//     return (
//       <>
//         <Flicking circular={true} plugins={this._plugins} useFindDOMNode={true}>
//           {items.map((item) => (
//             <Product {...item} key={item._id} />
//           ))}
//         </Flicking>
//         <span className="flicking-arrow-prev is-thin"></span>
//         <span className="flicking-arrow-next is-thin"></span>
//       </>
//     )
//   }
// }
