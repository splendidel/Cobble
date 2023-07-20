// src/components/Profile.js
import React from 'react';
import profilePhoto from '../assets/user-1.jpg'

const Profile = () => {
  return (
    <div>
      <div>
    { /*Static sidebar for desktop*/}
    <div class="flex flex-col fixed lg:fixed h-full lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
      
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <h1 class="text-white font-bold">My Profile</h1>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li>
                  
                  <a href="#" class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    Teams
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    Team Member
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    Notifications
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    Billings
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    Data Export
                  </a>
                </li>
              </ul>
              
            </li>
            <div><a href="#"><button class="text-red-600 hover:text-red-800  font-semibold ">Delete Account</button></a></div>
          </ul>
        </nav>
      </div>
    </div>
  
    <div class="pl-40 lg:pl-64">
      <div class="py-10 flex flex-col gap-y-5">
        <h1 class="pl-16 pb-0 font-bold">Profile</h1>

        {/*Bio section*/}
        <div class="flex border lg:mx-16 px-4 sm:px-6 rounded-2xl">
          
          <div class="flex justify-start" >
          {/**image */}
          <div> 
            <img 
            src={profilePhoto} 
            className='rounded-full h-20 w-20 my-3 bg-blue-400' alt="profile_image"/>     
          </div>
                  
           <div class="flex flex-col justify-center pl-3">
              <h1 class="font-semibold">Rafigur Rahman</h1>
                <ul class="text-gray-500">
                  <li>Team Manager</li>
                  <li>Leads, United Kingdom</li>
                </ul>
            </div>
          </div>
          <div class="flex justify-end flex-1">
            <div class="flex items-center">
                <button class="border rounded-3xl px-4 py-1 text-gray-500">Edit <i class="fa fa-pencil fa-sm pl-1" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>

        {/*Personal Information Section*/} 
         <div class="border lg:mx-16 px-4 py-4 sm:px-6 rounded-2xl">
    
                <div class="flex flex-row pb-4" >
                    <div class="justify-start"><h1 class="font-semibold">Personal Information</h1></div>
                    <div class="flex flex-1 justify-end"><button class="border rounded-3xl px-4 py-1 text-gray-500">Edit <i class="fa fa-pencil fa-sm pl-1" aria-hidden="true"></i></button></div>
                </div>

                <div class="flex flex-row space-x-28">
                    <div class="flex flex-col gap-y-4 w-1/4">
                        <ul>
                            <li class="text-gray-500">First name</li>
                            <li>Rafigur</li>
                        </ul>
                        <ul>
                            <li class="text-gray-500">Email</li>
                            <li>rafiqurrahman51@gmail.com</li>
                        </ul>
                        <ul>
                            <li class="text-gray-500">Bio</li>
                            <li>Team Manager</li>
                        </ul>
                    </div>

                    <div class="flex flex-col gap-y-4 w-2/4">
                        <ul>
                            <li class="text-gray-500">Last name</li>
                            <li>Rahman</li>
                        </ul>
                        <ul>
                            <li class="text-gray-500">Phone Number</li>
                            <li>+234 8023102810</li>
                        </ul>
                    </div>
                </div>
        </div> 

        {/*Address Section*/}
         <div class="border lg:mx-16 px-4 py-4 sm:px-6 rounded-2xl">
                <div class="flex flex-row pb-4" >
                    <div class="justify-start"><h1 class="font-semibold">Address</h1></div>
                    <div class="flex flex-1 justify-end"><button class="border rounded-3xl px-4 py-1 text-gray-500">Edit <i class="fa fa-pencil fa-sm pl-1" aria-hidden="true"></i></button></div>
                </div>

                <div class="flex flex-row space-x-28">
                    <div class="flex flex-col gap-y-4 w-1/4">
                        <ul>
                            <li class="text-gray-500">Country</li>
                            <li>United Kingdom</li>
                        </ul>
                        <ul>
                            <li class="text-gray-500">Postal code</li>
                            <li>ERT 2554</li>
                        </ul>
                    </div>

                    <div class="flex flex-col gap-y-4 w-2/4">
                        <ul>
                            <li class="text-gray-500">City/State</li>
                            <li>Leeds, East London</li>
                        </ul>
                        <ul>
                            <li class="text-gray-500">TAX ID</li>
                            <li>AS45645756</li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</div>
    </div>
  </div> 

  );
};

export default Profile;
