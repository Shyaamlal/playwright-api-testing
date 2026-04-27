import { test, expect } from "@playwright/test"

test('DELETE a /booking', async ({ request }) => {

    //Arrange - Getting a token
    const credentials = {username: 'admin', password: 'password123'}
    const apiResponse = await request.post('/auth', {data: credentials})
    const apiBody = await apiResponse.json()
    const token = apiBody.token

    //Arrange - Getting the first booking ID to update
    const getBookings = await request.get('/booking')
    const getBookingsJSON = await getBookings.json()
    const bookingId = getBookingsJSON[0].bookingid
    
    //Act
    const delResponse = await request.delete(`/booking/${bookingId}`, { headers: { 'Cookie': `token=${token}` } })

    //Assert
    expect(delResponse.status()).toBe(201)
})