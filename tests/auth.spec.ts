import { test, expect } from "@playwright/test"

test ('post /auth returns 200 status and a valid token', async ({ request }) => 
    {
    //Arrange
    const credentials = {username: 'admin', password: 'password123'}
    //Act
    const apiResponse = await request.post('/auth', {data: credentials})
    const apiBody = await apiResponse.json()
    //Assert
    expect(apiResponse.status()).toBe(200)
    expect(typeof apiBody.token).toBe('string')
    }
)