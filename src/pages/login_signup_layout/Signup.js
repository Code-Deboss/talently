import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    // <>
    //   <main class="bg-light signup_login_container h-[100vh] w-[100%]  grid grid-cols-auto-fit flex-row">
    //     <section className='h-[100vh] w-[50%] bg-red-400'> 
          
    //     </section>
    //     <section className='h-[100vh] w-[50%] bg-green-300'> 
          
    //     </section>
        
    //   </main>
      
    // </>
        <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-row justify-content-center align-items-center bg-red-300 ">
          <img class="w-full h-auto" src="https://picsum.photos/id/63/600/400" alt=""/>
        </div>
        <div class="flex flex-column">
          <h1 class="text-2xl font-semibold mb-4">Sign up</h1>
          <form action="/signup" method="post">
            <input type="email" name="email" class="w-full py-2 px-2 border rounded-md" placeholder="Email"/>
            <input type="password" name="password" class="w-full py-2 px-2 border rounded-md" placeholder="Password"/>
            <button type="submit" class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup