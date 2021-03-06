import React from 'react';
import { Switch, Image } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Icon } from '../../../icons/IconStyled';
import ViewPageBase from '../View';
import Helper from '../Helper';

const ViewPage = () => {
  const createDataSource = volunteers => {
    const dataSource = [];

    volunteers.map((volunteer, key) => {
      return dataSource.push({
        key: key + 1,
        id: volunteer.id,
        firstName: volunteer.firstName,
        lastName: volunteer.lastName,
        phone: volunteer.phone,
        email: volunteer.email,
        city: volunteer.city,
        address: `${volunteer.address} ${volunteer.addressNumber}`,
        birthday:
          volunteer.birthday == null
            ? undefined
            : Helper.toDateFormat(volunteer.birthday.seconds),
        language: (
          <div>
            {volunteer.language.map((_, i) => (
              <div key={i}>
                {_}
                <br />
              </div>
            ))}
          </div>
        ),
        otherLanguages:volunteer.otherLanguages,
        gender:volunteer.gender,
        idNumber:volunteer.idNumber,
        groups: (
          <div>
            {volunteer.groups.map((_, i) => (
              <div key={i}>
                <a href={`../Groups/edit/${_.id}`}>{_.name}</a>
                <br />
              </div>
            ))}
          </div>
        ),
        carOwner: <Switch checked={volunteer.carOwner} />,
        kosherFood: <Switch checked={volunteer.kosherFood} />,
        additionalInfo:volunteer.additionalInfo,
        signedForm:
          volunteer.signedForm === null ? (
            <Icon className="icon-single" style={{ padding: '0px' }}>
              <FeatherIcon color="red" icon="x-square" size={18} />
            </Icon>
          ) : (
            <Image width={20} src={volunteer.signedForm.url} />
          ),
        joinDate: Helper.toDateFormat(volunteer.joinDate.seconds),
      });
    });

    return dataSource;
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      filtered: true,
      fixed: 'left',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      filtered: true,
      fixed: 'left',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      filtered: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      filtered: true,
    },

    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      filtered: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
    {
      title: 'Other Language',
      dataIndex: 'otherLanguages',
      key: 'otherLanguages',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'ID Number',
      dataIndex: 'idNumber',
      key: 'idNumber',
    },
    {
      title: 'Additional Information',
      dataIndex: 'additionalInfo',
      key: 'additionalInfo',
    },
    {
      title: 'Car',
      dataIndex: 'carOwner',
      key: 'carOwner',
    },
    {
      title: 'Kosher',
      dataIndex: 'kosherFood',
      key: 'kosherFood',
    },
    {
      title: 'Signed Form',
      dataIndex: 'signedForm',
      key: 'signedForm',
    },
    {
      title: 'Groups',
      dataIndex: 'groups',
      key: 'groups',
      joinCollection: 'Groups',
      sourceColumn: 'groups',
      action: 'in',
      destinationColumn: 'id',
    },
    {
      title: 'Joined Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
  ];

  return ViewPageBase('Volunteers', columns, createDataSource);
};

export default ViewPage;
