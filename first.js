

let URL ="https://contest-hive.vercel.app/api/all";

let fun =async()=>{
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data)
    let atcoder =data.data.atcoder
    let inner=""
    let cardcontainer1 = document.getElementById("card-container1"); 
    for(let i in atcoder){
      console.log(atcoder[i].url)
     inner +=`
         <div class="card mx-4 my-4" style="width: 20rem;">
        <img src="https://imgs.search.brave.com/Wcv_-kUOFLHweyGW8ODFtVJ-JoGgodZqLaAmb06fBSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaGFuZC1jb2Rp/bmctY29uY2VwdC1p/bGx1c3RyYXRpb25f/MTE0MzYwLTgxOTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" class="card-img-top" alt="..."> 
            <div class="card-body ">
             <h5 class="card-title">${atcoder[i].title}</h5>
               <b class="card-text">${atcoder[i].platform}</b>
               <p> Stert at:${atcoder[i].startTime}</p>
               <p> End at:${atcoder[i].endTime}</p>
                <a href="${atcoder[i].url}" class="btn btn-primary my-4" >Go somewhere</a>
  </div>
</div>
      `
    }
cardcontainer1.innerHTML=inner

let codechef=data.data.codechef;
        for(let i in codechef){
             console.log(codechef[i].url)
     inner +=`
         <div class="card mx-4 my-4" style="width: 20rem;">
        <img src="https://imgs.search.brave.com/Wcv_-kUOFLHweyGW8ODFtVJ-JoGgodZqLaAmb06fBSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaGFuZC1jb2Rp/bmctY29uY2VwdC1p/bGx1c3RyYXRpb25f/MTE0MzYwLTgxOTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" class="card-img-top" alt="..."> 
            <div class="card-body">
             <h5 class="card-title">${codechef[i].title}</h5>
               <b class="card-text">${codechef[i].platform}</b>
               <p> Stert at:${codechef[i].startTime}</p>
               <p> End at:${codechef[i].endTime}</p>
                <a href="${codechef[i].url}" class="btn btn-primary my-4" >Go somewhere</a>
  </div>
</div>
      `
    }
cardcontainer1.innerHTML=inner


let codeforces=data.data.codeforces;
        for(let i in codeforces){
             console.log(codeforces[i].url)
     inner +=`
         <div class="card mx-4 my-4" style="width: 20rem;">
        <img src="https://imgs.search.brave.com/Wcv_-kUOFLHweyGW8ODFtVJ-JoGgodZqLaAmb06fBSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaGFuZC1jb2Rp/bmctY29uY2VwdC1p/bGx1c3RyYXRpb25f/MTE0MzYwLTgxOTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" class="card-img-top" alt="..."> 
            <div class="card-body ">
             <h5 class="card-title">${codeforces[i].title}</h5>
               <b class="card-text">${codeforces[i].platform}</b>
               <p> Stert at:${codeforces[i].startTime}</p>
               <p> End at:${codeforces[i].endTime}</p>
                <a href="${codeforces[i].url}" class="btn btn-primary my-4" >Go somewhere</a>
  </div>
</div>
      `
    }
cardcontainer1.innerHTML=inner




let leetcode=data.data.leetcode;
        for(let i in leetcode){
             console.log(leetcode[i].url)
     inner +=`
         <div class="card mx-4 my-4" style="width: 20rem;">
        <img src="https://imgs.search.brave.com/Wcv_-kUOFLHweyGW8ODFtVJ-JoGgodZqLaAmb06fBSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaGFuZC1jb2Rp/bmctY29uY2VwdC1p/bGx1c3RyYXRpb25f/MTE0MzYwLTgxOTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" class="card-img-top" alt="..."> 
            <div class="card-body ">
             <h5 class="card-title">${leetcode[i].title}</h5>
               <b class="card-text">${leetcode[i].platform}</b>
               <p> Stert at:${leetcode[i].startTime}</p>
               <p> End at:${leetcode[i].endTime}</p>
                <a href="${leetcode[i].url}" class="btn btn-primary my-4" >Go somewhere</a>
  </div>
</div>
      `
    }
cardcontainer1.innerHTML=inner
    
}
fun()