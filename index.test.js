const {sequelize} = require("./db"); //import from db.js file
//const { Video } = require('./Video');
const { Comments } = require('./Comments');
//const { CommentSection } = require('./CommentSection');
//const {Video, Comments} = require("./index") // pull them from index, where we make our association
//const {Comments, CommentSection}=require ("./index")
const {Video,CommentSection}=require ("./index")


describe('Video Database', () => { 

	beforeAll(async () => {

        await sequelize.sync({force: true}) 
        // This creates the table, dropping it first if it already existed.
		
	})
    
	test('Video can have title', async() => {
        const videoTitle = await Video.create({title :'Butter Music Play'}) 
        //.create() to create table and column name 
		expect(videoTitle.title).toBe('Butter Music Play')
	})
	
	test('can have views', async () => {
        const videoViews = await Video.create({title:'Butter Music Play',
        views : 1000});
		expect(videoViews.views).toBe(1000);

	})
    
        
        test('Comments can have description', async() => {
            const commentDescription = await Comments.create({description:'Easy and breeze.'}) 
            //.create() to create table and column name 
            expect(commentDescription.description).toBe('Easy and breeze.')
        })
        
        test('Comments can have likes', async () => {
            const commentLike = await Comments.create({description: 'Not so clear',likes:true});
            expect(commentLike.likes).toBetruthy;
    
        })
            
            test('CommentSection can have number of comments', async() => {
                const commentNumber = await CommentSection.create({numberComments :265}) 
                //.create() to create table and column name 
                expect(commentNumber.numberComments).toBe(265)
            })
            
            test('can have disabled comments', async () => {
                const commentDisabled = await CommentSection.create({numberComments :265,disabled:false});
                expect(commentDisabled.disabled).toBeFalsy;
        
            })

    
	// test('Videos can have many comments', async () => {
    //     const javaTutorial = await Video.create({title: 'Java Tutorial',views:2000})
	// 	const comments1 = await Comments.create({description: 'Nice tutorial',likes:true});
	// 	const comments2 = await Comments.create({description: 'Its so easy',likes:false});
	// 	const comments3 = await Comments.create({description: 'Not so clear',likes:true});
		
		
	// 	await javaTutorial.addComments(comments1);
	// 	await javaTutorial.addComments(comments2);
	// 	await javaTutorial.addComments(comments3);
	
	// 	const comments = await javaTutorial.getComments();
	// 	expect(comments.length).toBe(3)
	// 	expect(comments[0] instanceof Comments).toBeTruthy
    //     expect(comments[0].description).toBe('Nice tutorial');
    // })

    // test('CommentSection can have many comments', async () => {
    //     const commentSection = await CommentSection.create({numberComments: 200,disabled:false})
	// 	const comments1 = await Comments.create({description: 'Nice tutorial',likes:true});
	// 	const comments2 = await Comments.create({description: 'Its so easy',likes:false});
	// 	const comments3 = await Comments.create({description: 'Not so clear',likes:true});
		
		
	// 	await commentSection.addComments(comments1);
	// 	await commentSection.addComments(comments2);
	// 	await commentSection.addComments(comments3);
	
	// 	const comments = await commentSection.getComments();
	// 	expect(comments.length).toBe(3)
	// 	expect(comments[0] instanceof Comments).toBeTruthy
    //  expect(comments[0].description).toBe('Nice tutorial');
    
    // })

    test('Video can have one comment section', async () => {
        const youtubeVideo = await Video.create({title:'JavaScript and SQl',views:500})
		const commentSection1 = await CommentSection.create({numberComments:20,disabled:true});
		
		await youtubeVideo.setCommentSection(commentSection1);
		
		const commentSection = await youtubeVideo.getCommentSection();
		//expect(commentSection.length).toBe(1)
		expect(commentSection instanceof CommentSection).toBeTruthy
        expect(commentSection.numberComments).toBe(20);
    
    })


    })