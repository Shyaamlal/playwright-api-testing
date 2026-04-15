import { test, expect } from "@playwright/test"

 test('get /booking returns a non-empty array of valid booking IDs', async ({ request }) => {
    
    // Act
    const apiResponse = await request.get('/booking')
    const apiBody = await apiResponse.json()

    // Assert
    expect(apiResponse.status()).toBe(200)
    expect(apiBody.length).toBeGreaterThan(0)   // not empty

    for (const item of apiBody) {
      expect(item).toHaveProperty('bookingid')                   // has the property
      expect(typeof item.bookingid).toBe('number')    // is a number
    }
  })

  test('details of a booking id from /booking', async ({ request }) => {
    
    // Act
    const apiResponse = await request.get('/booking')
    const apiBody = await apiResponse.json()

    // Assert
    const firstBookingId = apiBody[0].bookingid  // get the first booking id
    const response = await request.get(`/booking/${firstBookingId}`)
    const firstBkIdDetails = await response.json() // get details from the first booking object
    expect(firstBkIdDetails).toHaveProperty('firstname')    // Checking for first name string property 
  })

  test ('posting a new /booking and asserting 200 status + total price', async ({ request }) => 
    {
    
    //Arrange
    const newBooking = {
      firstname: 'Joe', 
      lastname: 'Smith',
      totalprice: 320,
      depositpaid: true,
      bookingdates: {checkin: '01-05-2026', checkout: '05-05-2026'},
      additionalneeds: 'none'
      }
    
    //Act
    const pushNewBooking = await request.post('/booking', {data: newBooking, headers: { 'Content-Type': 'application/json' }})
    const pushBookingResponse = await pushNewBooking.json()

    //Assert
    expect(pushNewBooking.status()).toBe(200)
    expect(typeof pushBookingResponse.bookingid).toBe('number')
    expect(pushBookingResponse.booking.totalprice).toBe(320)
    }
)