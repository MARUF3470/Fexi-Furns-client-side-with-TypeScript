import React from 'react'
import { motion } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
type ToggleDrawerType = {
    toggleDrawer : ()=> void
}
const CartDrawer = ({ toggleDrawer }: ToggleDrawerType) => {
  return (
    <div>
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu bg-base-100 text-base-content">
                <div className='border flex justify-between items-center py-3 shadow-md px-4'>
                    <h5 className='font-semibold'>SHOPPING CART</h5>
                    <motion.label onClick={toggleDrawer} whileHover={{ rotate: 60 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                      }} htmlFor="my-drawer-4" className="drawer-button">
                      <IoMdClose className='w-8 h-8'></IoMdClose>
                  </motion.label>
                </div>
              <div className='overflow-auto h-96'>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit in dolorem pariatur. Autem veniam quod iure exercitationem itaque omnis ut aliquid facere repellat beatae maiores incidunt, corporis quisquam ab voluptates consequuntur labore? Illo velit quis soluta, accusamus in distinctio sequi amet pariatur recusandae natus sapiente ut omnis reiciendis sunt provident doloribus possimus ullam numquam voluptates? Consequuntur magnam optio saepe, at quidem totam esse ab placeat reiciendis, laborum consectetur nostrum illo veritatis debitis minus magni facere voluptatem! Repudiandae id voluptatum necessitatibus nostrum! Nisi similique sed, non placeat unde delectus magni libero tempore sit est. Voluptate dolores tempore ipsum ad excepturi!</h1>
                    {/* {products.map(product => <div className='flex justify-center items-center my-2 p-2 border-y-2' key={product._id}>
                        <div>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className=" w-20 h-20">
                                        <img src={product?.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{product?.name}</div>
                                    <div className="text-sm">Price: ${product?.price}</div>
                                    <div className="text-sm">Quantity: {product?.quantity}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(product?._id)} className="btn btn-ghost btn-xs">X</button>
                        </div>
                    </div>)} */}
                </div>
                <div className='flex justify-between w-11/12 mx-auto my-2'>
                    <h4 className='font-bold text-lg'>Subtotal:</h4>
                    {/* <p className='font-bold text-lg text-purple-700'>${totalprice}</p> */}
                </div>
                <div className='w-11/12 mx-auto'>
                    {/* <Link to='/cartitems' className='w-full btn btn-outline rounded-none'>View Cart</Link> */}
                </div>
            </ul>
    </div>
  )
}

export default CartDrawer