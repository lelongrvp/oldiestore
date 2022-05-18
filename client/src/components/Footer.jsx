import { Facebook, GitHub, Instagram, MailOutline, Payment, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;    
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const PaymentMethod = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
        <Container>
            <Left>
                <Logo>.POOCHSWADGE.</Logo>
                <Desc>
                    One of the most passionate people in the entire world.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="171515">
                        <GitHub/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Video Games</ListItem>
                    <ListItem>Consoles</ListItem>
                    <ListItem>Merchandise</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Term & Condition</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 123 ABC Street, XYZ, Wakanda
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +123 456 789
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> lelongrvp7@gmail.com
                </ContactItem>
                <Payment style={{marginRight:"10px"}}/><PaymentMethod src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj0AAABYCAMAAAAp6bbzAAACB1BMVEX////19fX09PT7+/v5+fn29vb+/v74+PgqOJX8/PwAMIjNAQABnuD+mQECG2cAMIcAm9/+lgAALYcAKYUmNZQgMJIAJ4X1gADTGQDKAACBkrz/nAAhMZMAI4OEi7wAJ4TtaAAAHoK13fPeQAAkRJG3u9YzQZsYKpABEGb41Kfw8fj6jQDn6O6js9Ke1OyPlcASJo+kAACxtM/Q2OX9qTEAN41kba5EUaLKzePy5eV+hrri5O/M0+LM5fE5ruXh9fz259bTKSj++O7km5vv19c4WJ2jp8s+S5/fdnZhebBwebVXYajTMDDXQDr9oiayAACDABvtra2SosZ0xeySABb9rEX+vHHyzs7YYGDXSUn74Ln9zpj9tVtPaqXXUlLxv7/+7tT7yIjgh4bmrK/db2/Qy9Gvb0EADmp2WnPaiCUka67Kfi4AgcYCJHGZZE3PGRgDQopbu+d+XWNRSIDHdnvcOx4EU5heDk3UsbpVU30CM3xjIE7qloFjbpmzJzNZOWl+U05iN0QlGleac2bJi0m5agVgAEKhN0WGfqfihAB7RDjhsn3p18drPmo4AFE/Qn6snK6pUWVPJVlES3tfQVu9PUVsWoGIAACPMkfelym0aiUTA0zjw8iPZ4y4oZ7Fk5prAAtgACmchI6vcopuZoCbe55tADM0KFAiK2epNyKSNS+4MhLthlJv2SyXAAAgAElEQVR4nO19i0Mb15nvmceZYXhEQhLUCISDjMCMBdjIGMEIZIuHDdg4FgY7GGxDnbZO4zrcpk2TXZptd5Ott3evs+km3U2z7W3T7fZu7h95z3PmzGhGmhE4flwONmj0aY7OfOc33/ucAYA0TZZwU+iRTg4kemC4SDAsSaolQXqgkAPZoEdSI5LuImn0SA5JUg9PYqxRRdbI4PAkJSSpuWlwMVQKy+uo0wCOetjH6AlJOkbPC4+eIwDWtwKRY/S8iOg5lj2kvTToYQN4QdBzLHtIM57RNABx2HLwFcnBww5Bco9NDh62D0l3kXwhEkxSmyNFQo/cHKkxr33QE3UaIvLaTWrMa6AZ6EdTdNIUeqTSI02rJemchI+eC4kc0QPVRTLIcJsjGZxkYJLqTxJY4yL5ca050gvHa4ek+k0DkEmzkUUaB51IUpsi6fQIiCTVh6Q1JCmHIUGRZPiQJD+SJJIYawyRBP1Isg/JjzXNkRpPA/AhReR1+Gmoo9VeKPszopnQpAUh1ZKasz99GRqW18/bWgs7DdIxelwkqZZ0BOiRjtHznK/opUKP7m+aQlWHx+h5SdADITR8SF70QNwY6WjQoxbTvq2aK5mqqjbk9UuGHsdcqxmbY5M1Q9LlmgE4NlkkkhKRpKvS9PTCNG4KUDAQZP9gQuUibpWKD0kWzvI4uIQU4PvC0mSmG//gf7idzOAXme6TydbB5Vy+Ia9flmmQgEKbSpridxSWpB6CdKgvriEpyKW/NX/l9rVLqF1988r8jQXsfHrPMozK1p3NjfNrvb1rG9ubd7YqyAs9gmEY1UxrrJW3GP+NXyQS3QOLo7px5Jf8fKYBRLzBIQOdz118iGhh0F0c7n70kKA+fevKpZ62NvSPtp62x2/OLxjuDtWLIxtrHZ2odXR0dOIXHWvbIxXhLgbid0W4VY10d2udluzeKcDwwtSf1yGnIVq0UA6OFvrzGojDfiXyXPr0/F0HOG0Ogq7cg9hoZWfd310juHG1zo7zu5VDWxDmTtIDGI8k6l609OM814uIHnX+ag1yeLt9S2Y+T2W3twY6DEBru5VDoie/mCCaCiOF/hL1F36V2cnDY/T4QMRN4j4P8mq+HfTcuh2IHdz2pnV81tb5AOxg+HRujEB4GPQUJlspZmJc2sRs+RPD78YSidFXFz0qFL3YmrFBnfELEE3AY2GqTg7ZWWQwEBiqmbdQM2Vddw/AsM/CWZSIww5Aj3GjLnZQu7YA1cpmIHQofno3K/AQ6ClmXMqqRoGhP8nF/CuFHprF2Brxti3ESHdaCFq5XBG1XDGXKyDzTUZ/WbOg4BZDRS5O9K9MXR4aGppamVkq2q6qkxYyS/zUkkByZXEiZIyMK43A09Zz6bsXt4MFD8fP9kXYfHaumqmxd2Ix1yHSXUUtuEO/7JwfqXF2zhB4XTc750dqnIIDVMzgHC9qyv3NjV6PMXn+DiXRD2rovP6uFta6LKABc7WvpSWVQv9bikDT6OdUYFjjU0Oprq4Uai2pvq6+lqmZAlZhKv0uFarW+OUh1lPfBeiQdNKFRA9Yh4oPyXCR1OkHtcZyLXxOrDUED4LPxn2qbx3WuL4L+pAMRtKWu0XIuPWXjZ40cJ0l+XSo+ZBUH5LqR4IhSWF57UeCHrmEvJKt3fOdIoA6O0cwybEkrSmKllRL1wqm5KdSBDwtqSEsQIgYhYbVPzScIm/bLXW2pAuCHpoX8CcIulpSly14yFizXN/kYeA5daYxdvBVr9336IDQvq++6LhcsVjMrcK48upeBmFUcQ0pYsj/W89UQFjZ2hY9ks6NimtsOY4JLGtQK9nHUyYbNpSXMMQ8LXU5D52xqdLSsEAcKuqHQ4/eWG2hduJM55kzYQDUuXGxOQsC5gcTAe66I49aTy5rzxQ9zy/PhXTm/U0BP733xbFpKxwXfRcwWkDOPl7V6BVBs/9sqqWmpVZd6LFWRYD1LR0SPfNhwMPa670h4LNdgU2hx5pMuPHiaa84evAAtPvnHT6OiGOzhjgwhpfISeNchHTN0CuCcr8PdhBAVkwBPcaE60Nd/TI8DHruhYZOD/r5Thjps9sUetRcIiFInNdq26NHsRiye15h9ADw1vc6ejkbxbHZ+iY1RJ2oFW5EUzQh9EwM+6NnXBybdsGl24hgah4909dCWMxtJ1hrOxXCcu5Y24JSKLvHjZ5RMdL8yAc9uH2/Pnp0nFECrEP0UodHhx7AimujoYee5UUP8x4AtqSB4ljZyDj+wcNeJsORZ6Uykmnrm64ZpMbQWKc4VPqwy6VJemHVAU9fH3mNfS+knFTqjpH+S10tLvQMWTonuY196lgoLhIQSOSKwuitnhPfOcNbCPBgg484FpQ1/LvIkZtrlES9JwBdWa4A8Lx2+u0xWXcuEkjuaSiNulshj5CKSaoPa9hZfiTVTVKzY66WLWNgBp3l8Bro9MSs5JoGdvf4RBMkeWV48oeUi2uynYNTc86EF3EoAOZtTZYqQBJocDz6VGplCceGchPjK0PD1MimIQNJHh92oaelq9h8vEdfCKWzuLkTwuqhFz7ifFfoeI+yLKAnFoied+LralCHRj4x4GnJ5dG8Kh0y3iOvxz2tfW69LJwVxGt9jH287In3uESWKJfUpeHU4PcoGy9CmzTOoYFsZnyWXrLBQ1wqCEwHTpdzlLOqCs3C0mqBjo0I/cKUR7thvddsrFkPE+lpO9EptnDCJ7KZAFmONFYfPY/i7e1jQR2C3IATLKJ/E93JHeyVHirWXJ5D3+pu8fjcmAYaxZoResiH5/SweS61ONySGv4R4eKWjZ78ZcFmxsNWcwKcCHqKtlAZngD2FUFdNVVnbOqE4/cz2bPSNHr0W49DyR4XlEK57SPR0WNRhz1W1+x57V08HbNB6KkO1Lr6iZOTRfVw6Jn1YocCaF1pWCy5T9Gzb4RFD1NJ/wMzcdc2l2xopFpMip4ljp6uGZmgxwnj9OUDFzGqtui5zDucMptFD9wLi5meHrvu5/Uw6Nk2oqJHL00KLlcQek6/jWdjPQg9yyc90SIiiZKLFnwG6GlvzzZCj0KFVnw9fI5dJYEdLH06t22S42D102SWPGPLniXqosw4Zk8gevTSWS6wJviHh0pNoseYDi7KcIkbVwvldnXcj4oeNZcRJEYQeh69QxRBEHrsaHUikRCCR5mqfij0jNUoLip85hqgB5bn6AfHQq1EJkdcqnyvt2OjwsZmTYlxZoyevO14pyZ0MoAVJw3GNZd7bLh3blkPjxe4mZTKNVlbqN2iYoWLlwDwvH7G3ah0qW8Bdd6JWluouMpSA9Bz+l06b2XfDqHJotWJ1snJWCzZzQF0cudwK5HX3eixj+Ll+iuRIRdaWW9tYXAlq1EkKcxU3w871u5TgrZkx5VXTAN/ULG4IYRkBy7XVUWXa2hC0/wKahUbhWctmb/sGjeaq9DVriDAPL527dolhJ2r9G+Nympr6+x1NwyOju3d3c2NAB9sbW2tY6OmGrpByS/YOckTo7FAo/k0m7hZw+8iDar8WhOTOcsqFHJpfIh1V6JbPkzxskatF6SAyqjNjs3Z6BnT6nZoZNkHyx5u1LvBLRq3Sf34YccWqfUVBE0XEjTkrAI3e1OXLXKWKqSvUi39lg59blVuLKWmDMAzH30zkRdOMAX2Zk/b9XvT09P3enrew4so9mrEz+NLl37yHU8709F5nhTCV+74ip+HFysXN9Yu+kcL8ZF/NbaQIw1Cz+mfstmYhb7CNNeaIHbODskEqbDK1FeiW21uuQXlGmRwiWdVErmyXbD4OgwWppjXXOWVJdc01F3PJfVTHPT9AAlwHMnUi7aWumyyGs8cx0rfBdozLAiZ9dRwy5KlusaGzQTbqcduOkdbajV0xZRb0C9cbet5H0cDFtreyOG3r2DjmGkwYiWf+xkAez2eduLMdgWQS73j+PDsBfr15AMTVHo7tiJmKkwiKJi5G4CeD+P+6OHTUO0mjnr3MplGWc9zRCL0uGYoUqyZWy8IBCxhxEERH+M2QICNZzvsEVYD6hPMtE39cJuiR0hpGeysJQc99DRJdqUgUn1TS3nv2DjkUpdLyI3jcqilUCd6Howe7K/3fGQBA6HnfbwlhHy37fb8jRt717DQeXDj3o0rf4OMtBt323oe7333Bq7juLu3d+nNv/3hNNA0q2gZm2ubI1tbu2sdHRubm+fP7671bt/ZfHiggou9HXciosdqFczcALPnnfb66ElnCPi6q5QETaYNExw9PMirk1AID+Sil3YBpxsHio74pnPrZY6jJ2ujh3dIeuCOHYlQY17bDrsaAT3QYvPa99F5jB6YdyJ8OHJFzrpgO2HjjA968bK7rGd4Kqe4rkjnhnXXChqbnXbtymni2EKj5wYSLwe4bm3h+q9wWH3h51/Rz17puT2NX9z6CFex3Wt7QI5uPL75Fvqt/OxToCm//7tf/PLv/4G8DyrbHyPCVmXr/H10lEej2ers3I2InpztbCNLxR89b7c70+iHHsgc9uQoQ09+J0ksqeQiibdAPV8arabT1dGSqUOzUCqglkeTnS+hViiYIq8VC1NLBdQ5s17i+7LkQU+WXok2mx1bX18fy+L4c3mWNBwGZyoOiagI6JGgDYPvVRBJz3Ebp+9Cnq9tWfVk3NHFShN97jhyamgmL15Rifc7PIHV2KptNgNxbKHRM9/Wdi6taSa4dbMITA3c+gRZYBr6WfjHPPl77yOsoeb/ETkiCtCMK+8XgaaDX5WANoI8rydPfmBh0CGw/BMiKODX/5MoNEPDKm0zInpGMzxOE/PPcp22wROfU311kIkUFYJeIlFkDLUWE3QpxjLOqan56uJkdwa15OBySRkdJG0RKnJ6krzcsQRepyl5sqDDdW40c/TYPliZuGiz63PtNCGxP2YgNTeHNR0GVrk9CD045RS0cYzSzzXMh1vILZT7bY9rQmVnqU5gucTOkiV9acgDn+FVUnbI0kJ2t6k8GrbBnTSu+3DuRxJyP2JddW1aSIIIPW+MAiUHFv45byKO3/tf1YOnH/abQJ8Bmnnw9IvPD5CE+/RfEOnTR0sKuPdZAausA1VT8NqK3ie/qR785uk41Cr/ignTS5pmjFZNTdM2Ozu3Ky7WNKwQTtfPcp1+11ZbaBpV38QdLhDC6BmkboisTjCzJzOKVcDo4EAywfIXmcnccgYHhZKTigrT5GVioGp3aOTQZ1E7OZiHMgfLmCSRadCZD9Y+p2MBsy648PH1LDmKE6U2a4PMOw0GaXxLKHrE97MCExwuZ99Ct6KtuJDNrNGzVMvJlFv0NPS+puTOujPoLV1TBUOnvRsmFz1dK0gG6CoPA6BuVWEYfNMqnxG6SBpCz19ywOwH+V+BIjKbb9w8d/3nP//AAuYMANOfX79+Ewm1r859YYLp6799mge3fpzXwFf/1g+0+8S5evLlkyf//g/LJlB/Y2ngrR8gCG19+btxJIA2EHpU1zD43mG01XBNNZfruVynX3tbDLlkNYfXzkUqpQz1zwcJO1SgsdWFicmSYqhVXnxGAJQYpLGh5KKqgCL1zU7uyCodIbAWk3QB9CjQIAdLFk86+sIxG8Wapsx6cmDcP5vVdIVrODTrbqAAUQfU7KVnqxhS+GVntLr66ecMZOPw91jhIA9TWTMe7dV1weIG3RI3xnHEEXtytoIjdc+R9y1E6PnMAtYKQIKnH8m4223zC3QQvzHxKp1L2BObx8pNrVRMA3x1oGjK45voDh1hgZ07WMBoYPoDpPfWvgBaZbv3yx1Fq6zhCkNJtD/rbU6IYxpWoMN++vSjd13YaZ8zfTtURweo2bODg3G6WVgeYB7Xsgl1JF9cCbBEgvpnM9h4Zl/eXYBsGpaJuR0bSAMhRzpLSOUxeyDojWy7Jw7ND1Uk+9aZy6VGW4lscvcptQqBxg1kWv1O0CNkuVZksRRPkyem3NWpfePsiswVu1OTxMGdgOOEGowel0nmQU/PRwooIWar4MfIc780T0aA5MtraQyKW5+UgHH7jSpgJ7+FboVbbfh4i4Cnd4t9fuFA0y4+OQDaxbWOjw8UcB+jR2mEHpGkF6hkoBnyR6d5e+3Rhz995x1PqHdd8+3QSNP1YInFKmrpHbtMemBUgaPMpUuczAwMZJx0WDdJYqQzTMMpdBpY1iQ5aBL0sC9ex6U6606scF8M/VDDx0G4BiSm4ch4I60l5S56asoCdkqhb4ZdrCGp447L5Y6eQ9VcWu0S8JMaogUawK4QInY2LqHnBWdd/T4FfI3Rc6Pt3AcA/Owpmv97H5hA/g8T5L/4PpKPN879bqeE9Gg/ckgufYK+LdefTqc//ZcqPucNpLkuEsX1qQryf36E3vw90nAjHzP0jBNwde5qkdBTSiSEhaNvO4U0Pm3Wv0OduVyx5AAxjXnKPrmjq8VJavEkJneqo6PV5ckEW+acyGH0FBLEvD65Q9FTGKTm9yQxv7n+afcOaRYoXKm1z61ns9l1W4vF97HzxNFeMw0N0FMUlIyTpZjg6UlJyJFSuSHs1wyhNT4kmD/cKZuxjSkswqAElRXbbCbaLyp67rX9FpnHf3iqaGAPSYwCws389f+NNP1ez/X3TxeBkcsDve2PCB5/+O3NmzfP/RErsrY3kP4yNs+c6fwSOca7T/4JvfkndM6dj3eAUdk48yNkst4hVblRsqQqdbmYTWt7V34tvq/5dghNon/IkmVxRc/JwZJuIGDFyOtcXldUVR9NMDQhosK8NXyUJ6zBdWro/IE0mdeAHCnO9Gft16RWzDGCMGIkmRGzUdGjO5kJ27FOTeU5RGD+gi1dcqpL9hAkqZaTMmWrv4DlLODBh7jo1I42D1nNoGfhMXK5jPeeGshFR6oqhyTIvTf/oGn6lb0Hd7+2kDdmasr81zvIqNm7ffvKjX8uAP1B27m/Io9duz+ylUe42dpAXrr+Z4S0zY8/RCbs/ZEKcu13Ozs7RiKhR2G6g5iqkwHTxe7yWf8OvSt6GH6SgyVVZ2ZxcrFA9rNCvK4yRTZYIDG+KvH4Eq2kKm90gH2aMnTfdzikuoeDZYzxWrfhgxADZ53X9Vci0yNhCSx3s4bHS7YMmVFt9VS47GS5dJ+SSGTkODlTsmBHqKqfmmHNiRkV9SYqU6ev/qUElM+fquAeMmbAp0j1GDj+l/9Pw8AmrTmDvG/w1mksv1UVTH+GnK+7bW3vL2vEEioiHaVhs3n6C4S07Se/LJJybeSHbJ/fQDZRlMpUg7lHBD0f1kFPnM9UTYd6sdW9HowgYGCxqEuQYROBg/PaWqQI2cmTW78UI4fdaYhJSarkinoQepD6GjPseE77vsx5ra8L6GEqb65cMw043ycLWVJyZN/gsp3yTF2wbV1sv5CPobOcstQplo6wSZQ3urOAJ7WKCDDvrOJKdbFmyy+m3HQ6DPt+lCUh3kOORJKk3f7M0uRzT03t7h+R9HjvERImSqkErH48r+r0e9/HuNn746MiyTp+9RQY05fa2r755YyFeyWwUksFMP1jDemszh+9i471omlUzm9unneypCTu5GRJZSFLSo4ISZAbicF6omfMkFy8dqYhJ3RBnKpkpnunii+F6jQEFXuJPQ5DEzt5mezXLMn4EzEkbkxo7nQTEGdGGUPnPCNAps/cehkJEzhmO2OUu04KbG4WynaWq1w7DfXVg17kjnfKtnpmdEdzCDlS11ZbTuZOv+ygR4KSnvMEEl2NKbeIK3LA/O8ODt67/ujgayRPDr6++smjdPU/P1s8+PrdA2Qk//nznk8+TFf/dLXnL6d30tX0rz5/dHDwoK2n5/WH/xVbTs/8fuMXH6bH//Rfiwe//uvBzmZvR8cvHvWP/+mvO8u/7l07vw0jxZpNwV9P/LQ9qMXb17VAVVxl8cZkJkMDyjvpXJ7slUkdulimqtj7pHH0VGmWFPlrROwlC8Yo6SbWvagQrsGy8+W07a/jjARmKPfIy44q5ugpI/QwMklwhM9UkPjFas1k54SLFdKmOs9vuNAjLLnomlGQf3WhdoWy06gpFBU9xsL1c+d6etD/tnP4V8+5N8714Leun7uJj9t6bqI32k6c+sn/+e///ubUT7755ptTp35yqrO348nHXz4809Hx8ZdPOp88fNL58OFDkmh/+OVDdIxfd45EQ0/BKSyMJYOM5nj7XDbYkOP71iUXS9BEDcqqqkJCKtHeB3K6Fz0DOYoevUTVXiZdGiQGdHKwQLmm25bxmCyTfjlDYdmuO/WihyCG50jX1cjocZwqe4KhcLE2FoaXVHyWlivpuHjERo86IaglJIkszzocT+dDZhPoUfS7YQpTT3V21iyqoEVi+Bd+RY/Yu5RyMRp6ikJZavIdX+jgVQxlP16zaYA0wofDw97bMTdA3HMBPXqJqsqBAkUPT6gmF3eo/hsYZVzTWXAwPscWd9m2vh96NI4YNJVCjjTqfs3qknfZ1ZJzsSqwBcvZIrkiaSq1ksvLOq8akCaE5TnIodL766MnVWwGPaDhpk+kfcdbWtiwdW7K0VYii2WpibgHNTjEMje3ntUDeE2ngZWlJlqLwEuaoEHnzKjK5byepqpyALL6HlhlWQ36J7lsc83OkXoDWHbV8r5ho2eWIwZKkL/ONkRPTTpA9y75bLEE9Jh2niJlQXyWOYTso9X+paJlmoZp5WYcKwfpNnRr1CpCNzYnAiBS/4FE4criT70utDAr2Tt6t2C0HVjEHKnbYd9fXx8by87OlrmLFpR6YZsoJAYLNegpDhB3rnuZTRdQmH+WmDQYetiSDi7+WCeIa7KNHm8Iwqkam2UkxdhnkEeIgVzlzULvNEjAfn4O2XaI5QDZFj+E4l6119Wv2CTdKJy1BYuJzwJEMfWRLZ/wu32OkZO6XNKchCjqaPgsa8OoORk0/N3OU4c04YFEdB8jXxKYD7MakK7F6aG/w22j4XyX4hqGLg7DIfEyLhKye1dAD47ZagBXBHvPEnmNp4FmF3CGPa95SaUkJbWOGrg7oOQG6TsndwBnjbzoxAxaMznAuWbnIrJOh4wkc19+v4wHpSpl7q/HZ9Fhlmk8uXYaAL+LxXiPKwZxQRQ+qRYSkWFBHTBhu1wrBo4S6Tw2jaWRe++n4XFkQajCIni249wEaTNCtLmJlchwOuRywB5aqdrTcyLUWtIt57vCxHtcOVK3y4XFvu8ect4OWbS6tXvHTTJkUudDkp6JyXTJQpI9PclLN2ZUWyxUB+whID9e4sUjtoDJuqtxsMS0wbKfLWtKecxJtwObGp8zaqfBRk+tccEgMuFCz6oJHZI2LhYWQh8ryW4YFtAuQkUnWOyb2fINnhEZKuiSzBadNjDJRJIezvI5cYq3cFuwaEaktaSC2oi58hRxUgwaypAzljNUbMz47HrJFSOyaiYnJxMn+bdlcJqIdViyg43JxbxmW2tOWWrt5qP2KkGm3Gzw4AVngBvQPtPQGD0FMUAzPK4IJMV2yHCYD6PH66Fx0A2vWvi5MbbN3DeliBYEtOyqxaIKrYKVj4geOH03zJ6Fp8Luf0DAc548vSISerrt2ptY6zvNoWfnJMlwIWepBj06CSXbDy0g/2l4p+igx95rHL0rbHzMAsZIAflURHrD0LYswl88dxj0mIKhS3cXdEhO8KZI8p0B0Zy+ofE8dhotZ7OWCdWFHnupz/C4YRXHl0oR0SPpCz6LuGrh83p4fwsXbhhKJPQQrcN9rpiIHhJpC4MeluWKtWaKPrJHqSbFLEaSlYbhHKnTYZWqt9ZkWvQUWfgvvg990OPdHoGXhmHE8Chjtin0GP1ConNGdpWA2cWGuOIH4kqd4ZTXqUp19V3ISaQM2raZU1MWdHsvPOzYd0EpFMfHo8qesLrrBHW4Qi1C3o28C5fRn4nxfeFdOdL4uh4WPcjlIun1RMEHPTA/k7GN4kRmsjjTTRMT+KbmKyFwCRDqAektET32SkDVBz0gK8An3r7OoYYRw3Oks43Q47vkDuSQV9SFf7qGU0Wy5IxbzcW+YZqoGsb7XUJZMosrU8jlohYz/tXX1Te1UlTZtgqr7ONdZ2dkyckY4QmYOMt6uizLxUKxaEMk/FNOQm9cGM7f2mQFzeFXIksKzTIxn0lEz1gNegKWN+ql1oGBgcxAZsd0k+hyY6iOLnZ3JxOJZHdmcKYAlgcyGfT5tOx0WFhkTnzJPktm6InjOmXdNwQxu99O4lG4JD6rZYnpEyd50WycxKr2yz7TABSV/NiraYUjFa8ZVg1r3G5LpsFJ+AlFpX7exmV6lob0ztLMKt7gG7fLq+MTBUWj5xiFGfvzRc39XUJXecO0LNM9DO8ARRJvhhJ2J42Q4DF8vtmXT85RhpSgk5YUXa74rFHnLLrcl72EzAu1hI8pzhUrmjW6vDjZurg8WjA0o0Q+mzOd7vVl5rOlNXG8ymyWNugdBT00YHZ9f44kv2RDkelnZzGpTF+XFc/Y8f/wjzGSyNIwr+bARQ64XEBYQ6jLZj5vmjRHI+m6+/bBfram1d50Mk3u4m3N6kYLfe59WweEkj5X/28I7BDJ02i/5tqVyGz5C2liliteDpSYvts6kMyW/3JjCWL+mrToQtaJx8pI5INk1XIMl2xAl8SEnoWCPsLUUE0TTZhNUkQrxW8awj9ZMso+nmTru1pSvRpPSmpqJbJNgvqNx408r567C5XdjgZ2T2fvLp6R6Ps1G8hdLNBmiRtWzIlnHZrXzoaBNSSV5b2Q3tIDeV3HkKszQ76WcdgrehmeSwrhwpsNwLMHkRd7p8HDBtZIlLDJ54WwSK643Un8aNETTIL5HVITnege1Q/B6/8/0YO+dnre58luNnau3QO4aBZe3A4WP50dm/dph4d7orYQQ2GxkmeOHsjCibHuZQiP0RM07GAS1G9dCcpaXJ0n69XJjmdbG/6Pd+vs2N6yd30/DHrEEEp8zEVqyOtmp0HN0WgiTo4ehtfh0ePJGAUmk9SmSE9Rg7cAAAMkSURBVK5UTfRnFQmkwJXItaRbe49rNhDr6XmTLREkJdcYP5vepwEhY7l3cwSR/PauDbsSmV9/WSgEjWd9WBP6MUahpwHmB7HeiiVwUU/wNDTmdfhpYNlqv+fnNCQpPiTfBxJFJPFnFTVJUqXpe7evPSZ7XFIYXXpzbwHyp0nR5DKaosqd7TW2Yw8pFlvbGKkYmCHNPavITUKyx277ZT0cQyOSPAwF1QH6CO8ZWY86Dc3xGnBkESHlG2t2kcJumOdHivysoqYFPbpWcOvG/N6VBw8e7O3Nf3fB5yyy3U1la+TO7iZqu3dGtirOTjhCh00KeknYlr2sNtIBdWqZIvDaJPvKV0fzEauSokyDO1oYfEWHeqTh83smskgysIaBdh1KrQVBfF98F9GHBRyltUY2UjpcCKKpaaAP+PS11o58GsDRDfvFeCaydytnCANIL5Ktf5Toee5PtX1lZM9z9xSPAFhHiJ4XUfZEtnuOYNjH6AnJ6+bsnrDTQDNVyMiDEknykyOdHrGx+ZAgPa0OieyvZ5Ogh4SPDJGke0ikbFfyJ5G1Gz4kjZGw1g8kQSc7J5I0mwQCSCrdv0UPIGk2CYgkgTV1SJTXmj+vJTr20NNQy2sPycvQutNQn9evYrynluR6NrXhQ2r8rKKI8Z4w1djNkBpPA/AhPbN4T1j18Lx1QERB36QOkGpJzWYqfBgaltdHMA3fir595TIVx+g5Rk+jYR+j55ny+hg9x+hpntcR0ROi3q3OMzQaPl7Dvww4GilEbWEw6dvPrwQ8qygcr1+WaZBAU8/qifjUoSMkHWa4LzXphWQoCESW7H8XE5L/repDavxAojok2YekiaRndauq4k0Xfk1F83dxPV671lR8q9PQmNdAHPZxpsKH9LLEml/STMWLnCU9Rg9px1nS4Mk+Rk8DXr88sucYPSFJrxZ66m9rK9hksmiTBZPI8r5GG9TWJck+JE0k6b4kSZYF+9dDkuTwJCCSnNxPzWbAYUhkUE3x2rGam5uGMPsE+5Ma85ovP/J70JIfyYhGavBAojAk34c/HR1Jfzak0AxtjhSW1894Gv4f7hULBT/6x7QAAAAASUVORK5CYII="/>
            </Right>
        </Container>
    )
}

export default Footer