const { request } = require('express');
const express = require('express');
const blog = require('./routes/blogs')
const work = require('./routes/works')
const sequelize = require('./database/database');
const cors = require('cors')
const Blog = require('./database/models/blog')
const Tag = require('./database/models/tag')
const Content = require('./database/models/content')
const Work = require('./database/models/work')


const PORT = 4444;


Tag.belongsToMany(Blog, { through: 'BlogTags'})
Blog.belongsToMany(Tag, { through: 'BlogTags' })

Work.hasMany(Content)
Content.belongsTo(Work)

Tag.belongsToMany(Work, { through: 'WorkTags'})
Work.belongsToMany(Tag, { through: 'WorkTags'})

const app = express();
app.use(express.static('public'))
app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded());
app.use('/blogs', blog)
app.use('/works', work)




app.use(express.json());

const start = async () =>{
    try{
        await sequelize.sync().then(
            result => {/*console.log(result) */},
            err => console.log(err)
        );
        
        app.listen(PORT, ()=>{
            console.log(`\n\nServer started on http://localhost:${PORT} port...`)
        })
    }catch(err){
        console.log(err);
    }
}
start();

// app.listen('3333');