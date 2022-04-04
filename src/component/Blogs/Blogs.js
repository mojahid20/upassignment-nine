import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="container mt-5 ms-5">
            <div class="row">
            <div class="col">
                <h3>What Is Semantic Tag</h3>
                <p>
                একটি উপাদান ব্রাউজার এবং ডেভলপার উভয়ের কাছে এর অর্থ স্পষ্টভাবে বর্ণনা করে ।
                
                </p>
                <p>
                non-semantic tag  এর   উদাহরণ: (ডিভ ট্যাগ এবং স্পেন ট্যাগ) - এর বিষয়বস্তু সম্পর্কে কিছুই বলে না।
                </p>
               <p>
               semantic elements: (ফ্রম ট্যাগ, টেবিল, এন্ড আরটিক্যাল)স্পষ্টভাবে এর বিষয়বস্তু বুঝ জায়
               </p>
               <p>
               এটি ওয়েব পেইজের   বিভিন্ন বিভাগ এবং বিন্যাস আরও ভালভাবে তুলে  ধরে HTML কে আরও সহজ করে তুলে করে তোলে
               </p>
                

            </div>
            <div class="col order-5">
                <h3> inline element vs  inline block element</h3>
                <p>An inline element এটি নতুন লাইন শুরু হয় না.</p>
                <p>An inline element যতটুকু জায়গা প্রায়োজন ততটুকু নেই</p>
                
                 <p>A block-level  এটি নতুন লাইন শুরু হয়  এবং ফুল ওয়িড গ্রহন করে</p>
                 <p>
                 block elements  সাধারনত ২ জায়গাইয় ব্যবহার হয় ( পি ট্যাগ, ডিভ ৎ
                 )
                 </p>
            </div>
            
            </div>
            </div>
        </div>
    );
};

export default Blogs;