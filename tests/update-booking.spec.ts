import { test, expect } from "@playwright/test"

test('PUT /booking updates a booking and returns updated firstname', async ({ request }) => {

    //Arrange - Getting a token
    const credentials = {username: 'admin', password: 'password123'}
    const apiResponse = await request.post('/auth', {data: credentials})
    const apiBody = await apiResponse.json()
    const token = apiBody.token

    //Arrange - Getting the first booking ID to update
    const getBookings = await request.get('/booking')
    const getBookingsJSON = await getBookings.json()
    const bookingId = getBookingsJSON[0].bookingid
    const updatedBooking = {
    firstname: 'UpdatedName',
    lastname: 'Smith',
    totalprice: 320,
    depositpaid: true,
    bookingdates: { checkin: '2026-05-01', checkout: '2026-05-05' },
    additionalneeds: 'none'}

    //Act
    const putResponse = await request.put(`/booking/${bookingId}`, 
        {data: updatedBooking, 
        headers: {'Content-Type': 'application/json', 'Cookie': `token=${token}`}})
    const putBody = await putResponse.json()

    //Assert
    expect(putResponse.status()).toBe(200)
    expect(putBody.firstname).toBe('UpdatedName')

})