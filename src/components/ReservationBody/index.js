import React, { useState, useEffect } from 'react';
import { BiUser, BiMoon, BiSearch } from 'react-icons/bi';
import axios from 'axios';
import {
    BookingCheckBoxLabel,
    GuestName,
    BookingTitleWarp,
    LastUpdate,
    ThridLineWarp,
    BookingCardContainer,
    BookingCardWarpper,
    BookingContentContainer,
    BookingBodyWarp,
    EmptyContentTitle,
    EmptyContentSubtitle,
    ContentButton,
    ButtonWarp,
    NavBottomBlock,
    NavSideBar,
    SideButton,
    NavTopBlock,
    SearchInput,
    BookingCheckBox,
    BookingTitle,
    BookingContentWarpper,
    Nonselected,
    IdNumberAndDate,
    RoomTypeAndGuests,
    HrBar,
    BookingDetailWarpper,
    BookingDetailItem,
    BookinglItemLabel,
    BookinglItemValue
} from './ReservationBodyElements';

const ReservationBody = () => {
    const [bookings, setBookings] = useState(() => []);

    const [id, setId] = useState();

    /* Get data from local json file
    useEffect(() => {
        fetch('./JSON/bookings.json')
            .then((response) => response.json())
            .then((result) => setBookings(result));
    }, []);
    */

    // get data from a local json-server
    useEffect(() => {
    axios
        .get(`http://localhost:3000/getAllReservations`)
        .then((res) => { setBookings(res.data) });
    }, []);

    const selectedBooking = bookings.find(selectedBooking => selectedBooking.id === id);

    const bookingDetail = () => {
        if (selectedBooking === undefined) {
            return (
                <Nonselected >
                    <EmptyContentTitle>Reservations</EmptyContentTitle>
                    <EmptyContentSubtitle>Select any reservation item</EmptyContentSubtitle>
                    <ButtonWarp>
                        <ContentButton>Create Booking</ContentButton>
                        <ContentButton>Create Booking with Quote</ContentButton>
                    </ButtonWarp>
                </Nonselected >
            );
        }
        else {
            return (
                <BookingContentContainer>
                    <BookingContentWarpper>
                        <BookingTitle>{selectedBooking.name}</BookingTitle>
                        <IdNumberAndDate>#{selectedBooking.id} created on {selectedBooking.update}</IdNumberAndDate>
                        <br />
                        <RoomTypeAndGuests>{selectedBooking.room} — {selectedBooking.people} adults</RoomTypeAndGuests>
                        <b>{selectedBooking.arrival}</b> 🡢 <b>{selectedBooking.departure}</b>({selectedBooking.night} nights)
                        <br />
                        <br />
                        <HrBar />
                        <br />
                        <BookingDetailWarpper>
                            <b>Guest</b>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Name</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.name}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Email</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.email}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Phone</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.phone}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Location</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.location}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Language</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.language}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>TCP/IP</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.tcpip}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                        </BookingDetailWarpper>
                    </BookingContentWarpper>
                </BookingContentContainer>
            )
        }
    };

    return (
        <BookingBodyWarp>
            <NavSideBar>
                <NavTopBlock>
                    <SearchInput
                        type='text'
                        id='keyWord'
                        name='keyWord'
                        placeholder='Search'
                        size='30'
                    />
                    <BiSearch style={{ color: '#666', marginLeft: '10px' }} />
                </NavTopBlock>
                <BookingCardContainer>
                    {bookings.map((booking, key) => (
                        <BookingCardWarpper key={key}>
                            <BookingCheckBox
                                id={key}
                                type="radio"
                                name="bookings"
                                value={booking.id}
                                checked={id === booking.id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <BookingCheckBoxLabel htmlFor={key}>
                                <BookingTitleWarp>
                                    <GuestName>{booking.name}</GuestName>
                                    <LastUpdate>{booking.update}</LastUpdate>
                                </BookingTitleWarp>

                                {booking.room}<br />

                                <ThridLineWarp>
                                    {booking.arrival},&nbsp;
                                    {booking.night}
                                    <BiMoon style={{ verticalAlign: 'bottom', marginBottom: '0.1rem' }} />
                                    {booking.people}
                                    <BiUser style={{ verticalAlign: 'bottom', marginBottom: '0.1rem' }} />
                                </ThridLineWarp>
                            </BookingCheckBoxLabel>
                        </BookingCardWarpper>
                    ))}
                </BookingCardContainer>
                <NavBottomBlock>
                    <SideButton>Create Booking</SideButton>
                </NavBottomBlock>
            </NavSideBar>

            {bookingDetail()}

        </BookingBodyWarp>
    );
};

export default ReservationBody;