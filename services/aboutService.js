const dynamoDBCourseService = require('../services/dynamoDBCourseService')
const dynamoDBMentionService = require('../services/dynamoDBMentionService')
const dynamoDBProjectService = require('../services/dynamoDBProjectService')
const dynamoDBUserService = require('../services/dynamoDBUserService')

const about = (mail) => {

    const user = dynamoDBUserService.findUser(mail)
    const mentions = dynamoDBMentionService.findAllMentions()
    const projects = dynamoDBProjectService.findAllProjects()
    const courses = dynamoDBCourseService.findAllCourses()

    return {user, mentions, projects, courses}
}

module.exports = {
    about
}