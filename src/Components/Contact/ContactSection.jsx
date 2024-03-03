import {
  Box,
  Grid,
  GridItem,
  Image,
  Stack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Text,
  Textarea,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import SectionHeading from "../Others/SectionHeading";
import {
  contactEmail,
  contactFormFieldTexts,
  contactImage,
  contactPrimaryText,
  contactURL,
} from "../../data";

const ContactSection = () => {
  const [headerRef, contentRef, isHeaderVisible, isContentVisible] =
    useScrollVisibility();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    fetch(contactURL, {
      method: "POST",
      body: JSON.stringify(values, null, 2),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("your message has been sent!");
          reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              console.log(
                data["errors"].map((error) => error["message"]).join(", ")
              );
            } else {
              console.log("oops! there was a problem sending your message");
            }
          });
        }
      })
      .catch(() => {
        console.log("oops! there was a problem sending your message");
      });
  };

  return (
    <Grid templateRows="1fr" rowGap={10}>
      <GridItem
        ref={headerRef}
        transform={`translateY(${isHeaderVisible ? "0" : "5vh"})`}
        opacity={isHeaderVisible ? "1" : "0"}
        transition={`transform 0.5s ease, opacity 0.5s ease`}
      >
        <SectionHeading sectionName={"contact"} sectionLink={"contact"} />
      </GridItem>
      <GridItem
        ref={contentRef}
        transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
        opacity={isContentVisible ? "1" : "0"}
        transition={`transform 0.75s ease, opacity 0.75s ease`}
      >
        <Box bgColor={"primary.50"} h={"auto"} borderRadius={"lg"}>
          <Grid templateColumns={["1fr", "1fr", "1.5fr 1fr", "1.5fr 1fr"]}>
            <GridItem p={4}>
              <form
                style={{ height: "100%" }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Stack h={"100%"} justify={"space-between"} rowGap={4}>
                  <Text fontFamily="secondary" mb={4}>
                    {contactPrimaryText}
                  </Text>
                  <FormControl isInvalid={errors.email}>
                    <FormLabel
                      htmlFor="email"
                      fontFamily={"primary"}
                      fontSize={"lg"}
                    >
                      {contactFormFieldTexts[
                        "email"
                      ]?.labelText?.toLowerCase() || "email"}
                    </FormLabel>
                    <Input
                      id="email"
                      size={"md"}
                      autoComplete="off"
                      placeholder={
                        contactFormFieldTexts[
                          "email"
                        ]?.placeholderText?.toLowerCase() || "your email"
                      }
                      variant="outline"
                      borderColor="primary.100"
                      _hover={{
                        borderColor: "primary.600",
                      }}
                      _focus={{
                        borderColor: "primary.600",
                      }}
                      {...register("email", {
                        required: "this is required",
                        minLength: {
                          value: 4,
                          message: "minimum length should be 4",
                        },
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                          message: "invalid email address",
                        },
                      })}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.message}>
                    <FormLabel
                      htmlFor="message"
                      fontFamily={"primary"}
                      fontSize={"lg"}
                    >
                      {contactFormFieldTexts[
                        "message"
                      ]?.labelText?.toLowerCase() || "message"}
                    </FormLabel>
                    <Textarea
                      id="message"
                      size={"md"}
                      placeholder={
                        contactFormFieldTexts[
                          "message"
                        ]?.placeholderText?.toLowerCase() || "your message"
                      }
                      variant="outline"
                      borderColor="primary.100"
                      _hover={{
                        borderColor: "primary.600",
                      }}
                      _focus={{
                        borderColor: "primary.600",
                      }}
                      {...register("message", {
                        required: "this is required",
                        minLength: {
                          value:
                            contactFormFieldTexts["message"]?.minLength || 0,
                          message: `minimum length should be ${
                            contactFormFieldTexts["message"]?.minLength || 0
                          } characters`,
                        },
                        maxLength: {
                          value:
                            contactFormFieldTexts["message"]?.maxLength || 250,
                          message: `maximum length should be ${
                            contactFormFieldTexts["message"]?.maxLength || 250
                          } characters`,
                        },
                      })}
                    />
                    <FormErrorMessage>
                      {errors?.message && errors?.message?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Flex my={4} justify={"end"}>
                    <Button
                      color={"white"}
                      bgColor={"primary.600"}
                      _hover={{
                        bgColor: "primary.100",
                        transition: "background-color 0.5s ease",
                      }}
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      send
                    </Button>
                  </Flex>
                  <Text fontFamily="secondary">
                    or, email me directly at
                    <br />
                    <Link
                      href={`mailto:${
                        contactEmail || "abhish.mazumder@gmail.com"
                      }`}
                      isExternal
                    >
                      {contactEmail || "abhish.mazumder@gmail.com"}
                    </Link>
                  </Text>
                </Stack>
              </form>
            </GridItem>
            <GridItem display={["none", "none", "block", "block"]} h={"450px"}>
              <Box h="100%">
                <Image
                  src={contactImage}
                  alt="contactImage"
                  borderRadius="lg"
                  objectFit="cover"
                  h="100%"
                  w="100%"
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ContactSection;
