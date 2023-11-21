const blogs = [
    {postName: "Post 1",PostDesciption: "Açıklama 1", Date: "21.11.2023", postId: 1},
    {postName: "Post 2",PostDesciption: "Açıklama 2", Date: "21.11.2023", postId: 2},
    {postName: "Post 3",PostDesciption: "Açıklama 3", Date: "21.11.2023", postId: 3},
]

function listPosts()
{
    blogs.map(blog => {
        console.log(`Name: ${blog.postName} \nAçıklama: ${blog.PostDesciption} \nTarih: ${blog.Date} \n`);
    })
}

function addPost(newBlog)
{
    return new Promise( (resolve , reject) => {
        console.log("Veriler Düzenleniyor...");
        if(newBlog)
        {
            resolve("Ekleme İşlemi Başarılı.\n");
            blogs.push(newBlog);
        }
        else {
            reject("Ekleme Sırasında Bir Sorun İle Karşılaşıldı.");
        }
    })
}

async function PostControl()
{
    try{
        let status = await addPost({ postName: "Post 4", PostDesciption: "Açıklama 4", Date: "21.11.2023", postId: 4 });
        console.log(status);
        listPosts();
    }catch(error){
        console.log(error);
    }
}
PostControl();
