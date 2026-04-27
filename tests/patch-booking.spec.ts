import { test, expect } from "@playwright/test"

test('PATCH a /booking', async ({ request }) => {

    //Arrange - Getting a token
    const credentials = {username: 'admin', password: 'password123'}
    const apiResponse = await request.post('/auth', {data: credentials})
    const apiBody = await apiResponse.json()
    const token = apiBody.token

    //Arrange - Getting the first booking ID to update
    const getBookings = await request.get('/booking')
    const getBookingsJSON = await getBookings.json()
    const bookingId = getBookingsJSON[0].bookingid
    const patchBooking = {firstname: 'UpdatedName'}
    
    //Act
    const patchResponse = await request.patch(`/booking/${bookingId}`, { data: patchBooking, headers: { 'Cookie': `token=${token}` } })

    //Assert
    expect(patchResponse.status()).toBe(200)
})